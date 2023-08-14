import { API_SUFFIX, UploadOptions, DataResponse, instance, GetItemOptions } from './api';

export interface FileUploadValues extends UploadOptions {
  file: FormData;
}

export interface FileUploadResponse extends DataResponse {
  filename: string;
  size: number;
}

export type GetFileOptions = GetItemOptions;

export interface GetFileResponse extends DataResponse {
  delete_url: string;
  download_url: string;
  filename: string;
  provide_token: boolean;
  size: number;
}

export const upLoadFile = async ({
  file,
  downloadLimit,
  timeLimit,
  password,
}: FileUploadValues) => {
  const { data } = await instance.post(
    `${API_SUFFIX.UPLOAD}${password ? `?pw=${password}` : ''}`,
    file,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-Download-Limit': downloadLimit,
        'X-Time-Limit': timeLimit,
      },
    },
  );
  return data;
};

export const getFileItem = async ({ id, token }: GetFileOptions) => {
  const { data } = await instance.get(`${API_SUFFIX.FILE}/${id}${token ? `?token=${token}` : ''}`);
  return data;
};
