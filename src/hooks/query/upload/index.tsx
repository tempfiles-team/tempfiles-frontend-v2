import { UseMutationResult, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';
import { useSetRecoilState } from 'recoil';

import { checkPwState } from '@/atom';
import {
  APIErrorResponse,
  APIResponse,
  FileUploadResponse,
  UploadOptions,
  UploadTextResponse,
  upLoadFile,
  upLoadText,
} from '@/api';
import { toastError, toastSuccess } from '@/utils';

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
  const navigation = useNavigate();
  const checkPw = useSetRecoilState(checkPwState);
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
      onSuccess: ({ data }, variables) => {
        checkPw({ isEncrypt: data.isEncrypted, token: data.token });
        navigation(`/dl/${data.id}?type=${variables.type}`);
        toastSuccess(`업로드에 성공했어요!`);
      },
      onError: () => {
        toastError('업로드에 실패했어요.');
      },
      retry: 0,
    },
  );
};
