import { UseMutationResult, useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { AxiosError } from 'axios';

import {
  APIErrorResponse,
  APIResponse,
  FileUploadResponse,
  UploadOptions,
  UploadTextResponse,
  upLoadFile,
  upLoadText,
} from '@/api';

export interface UploadValues {
  type: 'file' | 'text';
  data: FormData | string;
  options: UploadOptions;
}

export const useUpload = (): UseMutationResult<
  APIResponse<UploadTextResponse | FileUploadResponse>,
  AxiosError<APIErrorResponse>,
  UploadValues
> => {
  return useMutation(
    'useUpload',
    ({ type, data, options }) => {
      if (type === 'file') {
        return upLoadFile({ file: data as FormData, ...options });
      } else {
        return upLoadText({ textData: data as string, ...options });
      }
    },
    {
      onSuccess: () => {
        toast.success(` 업로드에 성공했어요!`, {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      },
      onError: () => {
        toast.error(`업로드에 실패했어요`, {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      },
      retry: 0,
    },
  );
};
