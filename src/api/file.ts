import {
  API_SUFFIX,
  UploadOptions,
  DataResponse,
  instance,
  GetItemOptions,
  CommonValue,
  DataUploadResponse,
} from './api';

export interface FileUploadValues extends UploadOptions {
  file: FormData;
}

export interface FileUploadResponse extends DataUploadResponse {
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

export type DeleteFileValue = CommonValue;

export type DownloadFileValue = CommonValue;

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
  console.log(data);
  return data;
};

export const getFile = async ({ id, token }: GetFileOptions) => {
  const { data } = await instance.get(`${API_SUFFIX.FILE}/${id}${token ? `?token=${token}` : ''}`);
  return data;
};

export const deleteFile = async ({ id }: DeleteFileValue) => {
  const { data } = await instance.delete(`${API_SUFFIX.FILE}/${id}`);
  return data;
};

export const downloadFile = async ({ id }: DownloadFileValue) => {
  const { data } = await instance.get(`/dl/${id}`);
  return data;
};
