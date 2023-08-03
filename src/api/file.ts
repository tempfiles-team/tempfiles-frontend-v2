import axios from 'axios';

import { API_SUFFIX } from './api';

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
  const { data } = await axios({
    method: 'post',
    url: `${API_SUFFIX.BASEURL}${API_SUFFIX.UPLOAD}${password ? `?pw=${password}` : ''}`,
    data: file,
    headers: {
      'Content-Type': 'multipart/form-data',
      'X-Download-Limit': downloadLimit,
      'X-Time-Limit': timeLimit,
    },
  });
  return data;
};
