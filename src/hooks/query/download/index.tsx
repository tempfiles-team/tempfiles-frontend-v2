import { UseMutationResult, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';

import {
  APIErrorResponse,
  APIResponse,
  FileUploadResponse,
  UploadTextResponse,
  downloadFile,
  downloadText,
} from '@/api';
import { toastError, toastSuccess } from '@/utils';

export interface DownloadValues {
  type: 'file' | 'text';
  id: string;
}

export const useDownload = (): UseMutationResult<
  APIResponse<UploadTextResponse | FileUploadResponse>, // 수정 필요
  AxiosError<APIErrorResponse>,
  DownloadValues
> => {
  const navigation = useNavigate();
  return useMutation(
    'useDownload',
    ({ type, id }) => {
      if (id === '' || id === undefined) {
        toastError('잘못된 접근입니다.');
        navigation('/');
      }
      if (type === 'file') {
        return downloadFile({ id });
      } else {
        return downloadText({ id });
      }
    },
    {
      onSuccess: () => {
        toastSuccess(`다운로드에 성공했어요!`);
      },
      onError: () => {
        toastError('다운로드에 실패했어요.');
      },
      retry: 0,
    },
  );
};
