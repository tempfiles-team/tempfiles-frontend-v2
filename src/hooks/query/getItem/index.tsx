import { UseQueryResult, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

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
import { toastError } from '@/utils';

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
  const navigation = useNavigate();
  return useQuery(
    'useGetItem',
    () => {
      if (options.id === '' || options.id === undefined) {
        toastError('잘못된 접근입니다.');
        navigation('/');
      } else {
        if (type === 'file') {
          return getFileItem({ ...options });
        } else {
          return getTextItem({ ...options });
        }
      }
    },
    {
      onSuccess: ({ data: { isEncrypted, provide_token } }) => {
        if (isEncrypted && !provide_token) {
          navigation('/check/pw');
        }
      },
      onError: () => {
        toastError('잘못된 접근입니다.');
        navigation('/');
      },
      retry: 0,
    },
  );
};
