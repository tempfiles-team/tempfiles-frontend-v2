import { UseMutationResult, useMutation } from 'react-query';

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
  return useMutation('useUploadFile', upLoadFile, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
    retry: 0,
  });
};
