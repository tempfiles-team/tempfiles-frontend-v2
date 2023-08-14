import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { useGetItem } from '@/hooks';

export const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  /** search는 뒤에 쿼리 값을 가져옴. search = ?type=file | ?type=text */
  const { search } = useLocation();

  /** search.split('=') =  [?type, file][1] = file */
  const type = search.split('=')[1];

  const { data, isLoading } = useGetItem({
    type: type as 'file' | 'text',
    options: {
      id: id,
    },
  });
  return (
    <div>
      <h1>Detail Page</h1>
    </div>
  );
};
