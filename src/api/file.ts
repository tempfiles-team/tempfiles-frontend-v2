import { API_SUFFIX, instance } from './api';

export interface FileUploadValues {
  file: FormData;
  password?: string;
  downloadLimit: number;
  timeLimit: number;
}

export interface FileUploadResponse {
  downloadCount: number;
  downloadLimit: number;
  expireTime: string;
  filename: string;
  id: string;
  isEncrypted: boolean;
  size: number;
  token: string;
  uploadDate: string;
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
