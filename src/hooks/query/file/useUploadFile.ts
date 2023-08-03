import { UseMutationResult, useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';

import {
  APIErrorResponse,
  APIResponse,
  FileUploadResponse,
  FileUploadValues,
  upLoadFile,
} from '@/api';

export const useUploadFile = (): UseMutationResult<
  APIResponse<FileUploadResponse>,
  AxiosError<APIErrorResponse>,
  FileUploadValues
> => {
  const navigation = useNavigate();
  return useMutation('useUploadFile', upLoadFile, {
    onSuccess: ({ id }) => {
      toast.success('파일이 성공적으로 업로드 되었어요!', {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      navigation(`/file/${id}`);
    },
    onError: () => {
      toast.error('파일 업로드에 실패했어요', {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    },
    retry: 0,
  });
};
