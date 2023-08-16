import { UseQueryResult, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';
import { useRecoilValue } from 'recoil';

import {
  APIErrorResponse,
  APIResponse,
  GetFileResponse,
  GetItemOptions,
  GetTextResponse,
  getFile,
  getText,
} from '@/api';
import { toastError } from '@/utils';
import { checkPwState } from '@/atom';

export interface GetItemValues {
  isCheckPwPage?: boolean;
  type: 'file' | 'text';
  options: GetItemOptions;
}

export const useGetItem = ({
  isCheckPwPage,
  type,
  options: { id },
}: GetItemValues): UseQueryResult<
  APIResponse<GetTextResponse | GetFileResponse>,
  AxiosError<APIErrorResponse>
> => {
  const navigation = useNavigate();
  const checkPw = useRecoilValue(checkPwState);
  return useQuery(
    'useGetItem',
    () => {
      if (id === '' || id === undefined) {
        toastError('잘못된 접근입니다.');
        navigation('/');
      } else {
        if (type === 'file') {
          return getFile({ id, token: checkPw.token, isEncrypted: checkPw.isEncrypt });
        } else {
          return getText({ id, token: checkPw.token, isEncrypted: checkPw.isEncrypt });
        }
      }
    },
    {
      onSuccess: ({ data: { isEncrypted, provide_token } }) => {
        if (!isCheckPwPage && isEncrypted && !provide_token) {
          toastError('비밀번호가 필요해요.');
          navigation(`/checkPw/${id}`);
        }
      },
      onError: (res) => {
        if (res.response?.status === 401) {
          toastError('비밀번호가 필요해요.');
          navigation(`/checkPw/${id}`);
        }
      },
      retry: 0,
      staleTime: Infinity,
    },
  );
};
