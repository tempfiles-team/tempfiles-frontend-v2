import { API_SUFFIX, instance } from './api';

export interface CheckPwValues {
  id: string;
  password: string;
}

export interface CheckPwResponse {
  token: string;
}

export const checkPw = async ({ id, password }: CheckPwValues) => {
  const { data } = await instance.post(`${API_SUFFIX.CHECK_PW}/${id}?pw=${password}`);
  return data;
};
