import { API_SUFFIX, instance } from './api';

export interface UploadTextValues {
  textData: string;
  password?: string;
  downloadLimit: number;
  timeLimit: number;
}

export interface UploadTextResponse {
  id: string;
  textData: string;
  isEncrypted: boolean;
  uploadDate: string;
  token: string;
  downloadLimit: number;
  downloadCount: number;
  expireTime: string;
}

export const upLoadText = async ({
  textData,
  password,
  downloadLimit,
  timeLimit,
}: UploadTextValues) => {
  instance.defaults.headers['X-Download-Limit'] = downloadLimit;
  instance.defaults.headers['X-Time-Limit'] = timeLimit;
  console.log(textData);
  const { data } = await instance.post(
    `${API_SUFFIX.TEXT}/new${password ? `?pw=${password}` : ''}`,
    textData,
  );
  return data;
};
