import { UploadOptions } from '@/api';

import { API_SUFFIX, DataResponse, DeleteValue, GetItemOptions, instance } from './api';

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

export type DeleteTextValue = DeleteValue;

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

export const getText = async ({ id, token }: GetTextOptions) => {
  const { data } = await instance.get(`${API_SUFFIX.TEXT}/${id}${token ? `?token=${token}` : ''}`);
  return data;
};

export const deleteText = async ({ id }: DeleteTextValue) => {
  const { data } = await instance.delete(`${API_SUFFIX.TEXT}/${id}`);
  return data;
};
