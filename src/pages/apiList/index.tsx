import React, { useState } from 'react';

import { DataBox } from '@/components';
import { API_LIST } from '@/constant/api';

import * as S from './styled';

const FILE = 'file';
const TEXT = 'text';

export const ApiListPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'file' | 'text'>(FILE);

  return (
    <S.ApiListPageContainer>
      <S.ApiListPageCategories>
        <S.ApiListCategory
          isSelected={selectedCategory === FILE}
          onClick={() => setSelectedCategory(FILE)}
        >
          FILE
        </S.ApiListCategory>
        <S.ApiListCategory
          isSelected={selectedCategory === TEXT}
          onClick={() => setSelectedCategory(TEXT)}
        >
          TEXT
        </S.ApiListCategory>
      </S.ApiListPageCategories>
      <S.ApiList
        key={selectedCategory}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {selectedCategory === FILE
          ? API_LIST.file.map((api) => <DataBox>{api.url}</DataBox>)
          : API_LIST.text.map((api) => <DataBox>{api.url}</DataBox>)}
        <S.ApiListPageBoxShoadow />
      </S.ApiList>
    </S.ApiListPageContainer>
  );
};
