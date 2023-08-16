import React, { useState } from 'react';

import { API_LIST } from '@/constant';
import { ApiBox } from '@/components';

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
        {selectedCategory === FILE ? (
          <ApiBox apiList={API_LIST.file} />
        ) : (
          <ApiBox apiList={API_LIST.text} />
        )}
        <S.ApiListPageBoxShadow />
      </S.ApiList>
    </S.ApiListPageContainer>
  );
};
