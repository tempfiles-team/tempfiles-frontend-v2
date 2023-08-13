import { UseQueryResult, useQuery } from 'react-query';

import { AxiosError } from 'axios';

import {
  APIErrorResponse,
  APIResponse,
  GetFileResponse,
  GetItemOptions,
  GetTextResponse,
  getFileItem,
  getTextItem,
} from '@/api';

export interface GetItemValues {
  type: 'file' | 'text';
  options: GetItemOptions;
}

export const useGetItem = ({
  type,
  options,
}: GetItemValues): UseQueryResult<
  APIResponse<GetTextResponse | GetFileResponse>,
  AxiosError<APIErrorResponse>
> => {
  return useQuery(
    'useUpload',
    () => {
      if (type === 'file') {
        return getFileItem({ ...options });
      } else {
        return getTextItem({ ...options });
      }
    },
    {
      retry: 0,
    },
  );
};
