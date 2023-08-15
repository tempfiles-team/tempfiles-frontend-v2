import axios from 'axios';

export const API_SUFFIX = {
  BASEURL: import.meta.env.DEV ? 'http://127.0.0.1:5050' : import.meta.env.VITE_BASEURL,
  UPLOAD: '/upload',
  FILE: '/file',
  TEXT: '/text',
  TEXTS: '/texts',
  LIST: '/list',
};

export type APIResponseStatusType = 'SUCCESS' | 'FAILED';

export interface APIResponse<T = unknown> {
  status: APIResponseStatusType;
  message: string;
  data: T;
}

export interface APIErrorResponse {
  status: 'FAILED';
  message: string;
  data?: null;
}

export interface UploadOptions {
  timeLimit: number;
  downloadLimit: number;
  password?: string;
}

export interface DataResponse {
  downloadCount: number;
  downloadLimit: number;
  expireTime: string;
  id: string;
  isEncrypted: boolean;
  token: string;
  uploadDate: string;
  provide_token?: boolean;
}

export interface GetItemOptions {
  id: string;
  token?: string;
}

export interface DeleteValue {
  id: string;
}

export const instance = axios.create({
  baseURL: API_SUFFIX.BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
