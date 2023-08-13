import { UseQueryResult, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
  const navigation = useNavigate();
  return useQuery(
    'useUpload',
    () => {
      if (options.id === '' || options.id === undefined) {
        toast.error(`잘못된 접근입니다.`, {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
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
      retry: 0,
    },
  );
};
