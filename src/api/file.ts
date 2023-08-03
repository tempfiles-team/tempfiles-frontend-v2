import axios from 'axios';

import { API_SUFFIX } from './api';

export interface FileUploadValues {
  file: FormData;
  password: string;
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

export const upLoadFile = async ({ file, downloadLimit, timeLimit }: FileUploadValues) => {
  const { data } = await axios({
    method: 'post',
    url: `${process.env.REACT_APP_BACKEND_BASEURL}/${API_SUFFIX.FILE}`,
    data: file,
    headers: {
      'Content-Type': 'text/plain',
      'X-Download-Limit': downloadLimit,
      'X-Time-Limit': timeLimit,
    },
  });
  return data;
};
