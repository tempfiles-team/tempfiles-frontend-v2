import { UseMutationResult, useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';
import { useSetRecoilState } from 'recoil';

import {
  APIErrorResponse,
  APIResponse,
  FileUploadResponse,
  UploadOptions,
  UploadTextResponse,
  upLoadFile,
  upLoadText,
} from '@/api';
import { checkFile } from '@/atom';

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
  const setFile = useSetRecoilState(checkFile);
  const navigation = useNavigate();
  return useMutation(
    'useUpload',
    ({ type, data, options }) => {
      if (type === 'file') {
        setFile(true);
        return upLoadFile({ file: data as FormData, ...options });
      } else {
        setFile(false);
        return upLoadText({ textData: data as string, ...options });
      }
    },
    {
      onSuccess: ({ data }) => {
        navigation(`/detail/${data.id}`);
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
