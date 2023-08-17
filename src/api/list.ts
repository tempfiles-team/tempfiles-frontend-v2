import { API_SUFFIX, instance } from './api';
import { FileResponse } from './file';
import { TextResponse } from './text';

export interface DataListResponse {
  files: FileResponse[];
  texts: TextResponse[];
}

export const getList = async (): Promise<DataListResponse> => {
  const { data } = await instance.get(API_SUFFIX.LIST);
  return data;
};
