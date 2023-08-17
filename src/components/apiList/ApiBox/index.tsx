import React from 'react';
import { Link } from 'react-router-dom';

import { ApiItem } from '@/constant';
import { DataBox } from '@/components';

export interface ApiBoxProps {
  apiList: ApiItem[];
}

export const ApiBox: React.FC<ApiBoxProps> = ({ apiList }) => {
  return (
    <>
      {apiList.map((api) => (
        <DataBox key={api.apiId}>
          <Link to={`/api${api.apiId}`}>{api.url}</Link>
        </DataBox>
      ))}
    </>
  );
};
