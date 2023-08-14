import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { useGetItem } from '@/hooks';
import { GetFileResponse, GetTextResponse } from '@/api';

interface ItemTypeMap {
  file: GetFileResponse;
  text: GetTextResponse;
}

type ItemType = keyof ItemTypeMap;

export const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { search } = useLocation();
  const type = search.split('=')[1] as ItemType;

  const { data, isLoading } = useGetItem({
    type: type,
    options: {
      id: id,
    },
  });

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  const content = getContent(type, data.data as ItemTypeMap[ItemType]);

  return (
    <div>
      <h1>Detail Page</h1>
      {content}
    </div>
  );
};

const getContent = (type: ItemType, data: ItemTypeMap[ItemType]) => {
  switch (type) {
    case 'file':
      const fileData = data as GetFileResponse;
      return (
        <>
          <span>{fileData.filename}</span>
          <span>{fileData.isEncrypted}</span>
          <span>{fileData.downloadLimit}</span>
        </>
      );
    case 'text':
      const textData = data as GetTextResponse;
      return <span>{textData.textData}</span>;
    default:
      return null;
  }
};
