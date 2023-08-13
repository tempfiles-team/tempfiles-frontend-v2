import { UploadOptions } from '@/api';

import { API_SUFFIX, DataResponse, GetItemOptions, instance } from './api';

export interface UploadTextValues extends UploadOptions {
  textData: string;
}

export interface UploadTextResponse extends DataResponse {
  data: string;
  numberOfText: number;
}

export interface GetTextResponse extends DataResponse {
  textData: string;
}
export type GetTextOptions = GetItemOptions;

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

export const getTextItem = async ({ id, token }: GetTextOptions) => {
  const { data } = await instance.get(`${API_SUFFIX.TEXT}/${id}${token ? `?token=${token}` : ''}`);
  return data;
};
