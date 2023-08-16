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
  const navigation = useNavigate();
  const setCheckPw = useSetRecoilState(checkPwState);
  return useMutation('useCheckPw', checkPw, {
    onSuccess: ({ token }, variables) => {
      setCheckPw({ token: token, isEncrypt: true });
      navigation(`/dl/${variables.id}`);
    },
    onError: () => {
      toastError('비밀번호가 틀렸어요.');
    },
    retry: 0,
  });
};
