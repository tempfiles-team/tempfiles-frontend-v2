import { UseQueryResult, useQuery } from 'react-query';

import { AxiosError } from 'axios';

import { APIErrorResponse, APIResponse, DataListResponse, getList } from '@/api';

export const useGetList = (): UseQueryResult<
  APIResponse<DataListResponse>,
  AxiosError<APIErrorResponse>
> => {
  return useQuery('useGetItem', getList, {
    onError: (error) => {
      console.log(error, 'error');
    },
    retry: 0,
  });
};
