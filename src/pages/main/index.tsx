import React, { useState } from 'react';

import * as S from './styled';

export const MainPage: React.FC = () => {
  const [textClick, setTextClick] = useState(false);
  const textRef = React.useRef<HTMLTextAreaElement>(null);
  const autoHeight = () => {
    if (textRef.current) {
      textRef.current.style.height = 'auto';
      textRef.current.style.height = textRef.current.scrollHeight + 'px';
    }
  };

  return (
    <S.MainPageContainer>
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
