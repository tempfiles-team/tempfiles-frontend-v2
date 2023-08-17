import { UseMutationResult, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';

import { APIErrorResponse, APIResponse, deleteFile, deleteText } from '@/api';
import { toastError, toastSuccess } from '@/utils';

export interface DeleteValues {
  type: 'file' | 'text';
  id: string;
}

export const useDelete = (): UseMutationResult<
  APIResponse<null>,
  AxiosError<APIErrorResponse>,
  DeleteValues
> => {
  const navigate = useNavigate();
  return useMutation(
    'useDelete',
    ({ type, id }) => {
      if (id === '' || id === undefined) {
        toastError('잘못된 접근입니다.');
        navigate('/');
      }
      if (type === 'file') {
        return deleteFile({ id });
      } else {
        return deleteText({ id });
      }
    },
    {
      onSuccess: () => {
        navigate(`/`);
        toastSuccess(`삭제에 성공했어요!`);
      },
      onError: () => {
        toastError('삭제에 실패했어요.');
      },
      retry: 0,
    },
  );
};
