import React, { useRef, useState } from 'react';
import { FaCheck } from 'react-icons/fa';

import { UPLOAD_OPTIONS_LIST } from '@/constant';

import * as S from './styled';

export const MainPage: React.FC = () => {
  const [textClick, setTextClick] = useState(false);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [activeOption, setActiveOption] = useState(UPLOAD_OPTIONS_LIST.map(() => false));

  const onOptionClick = (i: number) => {
    setActiveOption((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  const autoHeight = () => {
    if (textRef.current) {
      textRef.current.style.height = 'auto';
      textRef.current.style.height = textRef.current.scrollHeight + 'px';
    }
  };

  return (
    <S.MainPageContainer>
      <S.MainPageUploadOptionWrapper>
        {UPLOAD_OPTIONS_LIST.map((option, i) => (
          <S.MainPageUploadOption onClick={() => onOptionClick(i)} key={i}>
            <S.MainPageCheckBox>{activeOption[i] && <FaCheck size={24} />}</S.MainPageCheckBox>
            <S.MainPageOptionName>{option}</S.MainPageOptionName>
          </S.MainPageUploadOption>
        ))}
      </S.MainPageUploadOptionWrapper>
      {activeOption[0] && (
        <div>
          <h1>this is active option 1</h1>
        </div>
      )}
      {activeOption[1] && (
        <div>
          <h1>this is active option 2 but i am different</h1>
        </div>
      )}
      {activeOption[2] && (
        <div>
          <h1>this is active option 2 but i am different</h1>
          <span>Hello babies</span>
        </div>
      )}
      <S.MainPageFindContainer>
        <S.MainPageTextContainer>
          {!textClick ? (
            <>
              <S.MainPageTextButton>NEW!</S.MainPageTextButton>
              <S.MainPageText onClick={() => setTextClick(true)}>
                여기에 텍스트를 붙혀넣어 보세요 :)
              </S.MainPageText>
            </>
          ) : (
            <S.MainPageTextArea
              ref={textRef}
              onChange={autoHeight}
              placeholder="여기에 텍스트를 붙혀넣어 보세요 :)"
            ></S.MainPageTextArea>
          )}
        </S.MainPageTextContainer>
        <S.MainPageFindButton>파일 찾아보기</S.MainPageFindButton>
      </S.MainPageFindContainer>
      <S.MainPageUploadButton>업로드</S.MainPageUploadButton>
    </S.MainPageContainer>
  );
};
