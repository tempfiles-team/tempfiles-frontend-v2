import { API_SUFFIX, UploadOptions, UploadResponse, instance } from './api';

export interface FileUploadValues extends UploadOptions {
  file: FormData;
}

export interface FileUploadResponse extends UploadResponse {
  filename: string;
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
