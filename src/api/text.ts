import { UploadOptions } from '@/api';

import { API_SUFFIX, UploadResponse, instance } from './api';

export interface UploadTextValues extends UploadOptions {
  textData: string;
}

export interface UploadTextResponse extends UploadResponse {
  data: string;
  numberOfText: number;
}

export const upLoadText = async ({
  textData,
  password,
  downloadLimit,
  timeLimit,
}: UploadTextValues) => {
  const { data } = await instance.post(
    `${API_SUFFIX.TEXT}/new${password ? `?pw=${password}` : ''}`,
    textData,
    {
      headers: {
        'Content-Type': 'text/plain',
        'X-Download-Limit': downloadLimit,
        'X-Time-Limit': timeLimit,
      },
    },
  );
  return data;
};
