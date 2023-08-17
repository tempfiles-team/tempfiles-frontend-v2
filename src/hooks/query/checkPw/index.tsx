import { UseMutationResult, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';
import { useSetRecoilState } from 'recoil';

import { APIErrorResponse, APIResponse, CheckPwResponse, CheckPwValues, checkPw } from '@/api';
import { toastError } from '@/utils';
import { checkPwState } from '@/atom';

export const useCheckPw = (): UseMutationResult<
  APIResponse<CheckPwResponse>,
  AxiosError<APIErrorResponse>,
  CheckPwValues
> => {
  const navigate = useNavigate();
  const setCheckPw = useSetRecoilState(checkPwState);
  return useMutation(
    'useCheckPw',
    ({ id, password }) => {
      if (id === '' || id === undefined) {
        toastError('잘못된 접근입니다.');
        navigate('/');
      }
      return checkPw({ id, password });
    },
    {
      onSuccess: ({ token }, variables) => {
        setCheckPw({ token: token, isEncrypt: true });
        navigate(`/dl/${variables.id}`);
      },
      onError: () => {
        toastError('비밀번호가 틀렸어요.');
      },
      retry: 0,
    },
  );
};
