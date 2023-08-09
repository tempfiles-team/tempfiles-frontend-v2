import { UseMutationResult, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AxiosError } from 'axios';

import {
  APIErrorResponse,
  APIResponse,
  UploadTextResponse,
  UploadTextValues,
  upLoadText,
} from '@/api';

export const useUploadText = (): UseMutationResult<
  APIResponse<UploadTextResponse>,
  AxiosError<APIErrorResponse>,
  UploadTextValues
> => {
  const navigation = useNavigate();
  return useMutation('useUploadText', upLoadText, {
    onSuccess: ({ id }) => {
      toast.success('텍스트 업로드에 성공했어요!', {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      //   navigation(`/text/${id}`);
    },
    onError: () => {
      toast.error('텍스트 업로드에 실패했어요', {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    },
  });
};
