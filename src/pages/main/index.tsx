import React, { useRef, useState } from 'react';

import { UPLOAD_OPTIONS_LIST } from '@/constant';
import { Button, DownloadLimit, ExpireTime, Password } from '@/components';

import * as S from './styled';

export interface ExpireTimeValues {
  day: number;
  hour: number;
  minute: number;
}

export const MainPage: React.FC = () => {
  const [textClick, setTextClick] = useState(false);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [activeOption, setActiveOption] = useState(UPLOAD_OPTIONS_LIST.map(() => false));
  const [expireTime, setExpireTime] = useState<ExpireTimeValues>({
    day: 0,
    hour: 3,
    minute: 0,
  });
  const [downloadLimit, setDownloadLimit] = useState<number>(1);
  const [password, setPassword] = useState<string>('');

  const onOptionClick = (i: number) => {
    setActiveOption((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  const onExpireTimeClick = (type: string, value: number) => {
    setExpireTime((prev) => ({ ...prev, [type]: value }));
    if (expireTime.minute > 59) {
      setExpireTime((prev) => ({ ...prev, [type]: 0, hour: prev.hour + 1 }));
    }
    if (expireTime.hour > 23) {
      setExpireTime((prev) => ({ ...prev, [type]: 0, day: prev.day + 1 }));
    }
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
            <S.MainPageCheckBox>{activeOption[i] && <S.MainPageCheckIcon />}</S.MainPageCheckBox>
            <S.MainPageOptionName>{option}</S.MainPageOptionName>
          </S.MainPageUploadOption>
        ))}
      </S.MainPageUploadOptionWrapper>
      {activeOption[0] && (
        <ExpireTime onExpireTimeClick={onExpireTimeClick} expireTime={expireTime} />
      )}
      {activeOption[1] && (
        <DownloadLimit setDownloadLimit={setDownloadLimit} downloadLimit={downloadLimit} />
      )}
      {activeOption[2] && <Password setPassword={setPassword} password={password} />}
      <S.MainPageFindContainer textClick={textClick}>
        <S.MainPageTextWrapper textClick={textClick}>
          {!textClick ? (
            <>
              <S.MainPageTextButton>NEW!</S.MainPageTextButton>
              <S.MainPageText onClick={() => setTextClick(true)}>
                여기에 텍스트를 붙혀넣어 보세요
              </S.MainPageText>
            </>
          ) : (
            <S.MainPageTextArea
              ref={textRef}
              onChange={autoHeight}
              placeholder="여기에 텍스트를 붙혀넣어 보세요"
            ></S.MainPageTextArea>
          )}
        </S.MainPageTextWrapper>
        {!textClick && <Button>파일 찾기</Button>}
      </S.MainPageFindContainer>
      <S.MainPageUploadButton>업로드</S.MainPageUploadButton>
    </S.MainPageContainer>
  );
};
