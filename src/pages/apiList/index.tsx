import React, { useState } from 'react';

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
    </S.ApiListPageContainer>
  );
};
