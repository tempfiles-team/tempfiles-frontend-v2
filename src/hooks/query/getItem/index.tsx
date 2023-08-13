import { UseQueryResult, useQuery } from 'react-query';

import { AxiosError } from 'axios';
import { useRecoilValue } from 'recoil';

import {
  APIErrorResponse,
  APIResponse,
  GetFileResponse,
  GetItemOptions,
  GetTextResponse,
  getFileItem,
  getTextItem,
} from '@/api';
import { checkFile } from '@/atom';

export const useGetItem = ({
  id,
  token,
}: GetItemOptions): UseQueryResult<
  APIResponse<GetTextResponse | GetFileResponse>,
  AxiosError<APIErrorResponse>
> => {
  const isFile = useRecoilValue(checkFile);
  return useQuery(
    'useUpload',
    () => {
      if (isFile) {
        return getFileItem({ id, token });
      } else {
        return getTextItem({ id, token });
      }
    },
    {
      retry: 0,
    },
  );
};
