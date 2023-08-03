import axios from 'axios';

export const API_SUFFIX = {
  BASEURL: import.meta.env.DEV ? 'http://127.0.0.1:5050' : import.meta.env.VITE_BASEURL,
  FILE: '/file',
  TEXT: '/text',
  LIST: '/list',
};

export type APIResponseStatusType = 'SUCCESS' | 'FAILED';

export interface APIResponse {
  status: APIResponseStatusType;
  message: string;
  result: {} | [];
}

export const instance = axios.create({
  baseURL: API_SUFFIX.BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
