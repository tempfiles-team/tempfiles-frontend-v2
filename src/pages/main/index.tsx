import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';

import { UPLOAD_OPTIONS_LIST, UPLOAD_OPTIONS_LIST_TYPE } from '@/constant';
import { DownloadLimit, ExpireTime, Password } from '@/components';
import { useUploadFile } from '@/hooks';
import { getFileSize } from '@/utils';

import * as S from './styled';

type ActiveOptionState = { [key in UPLOAD_OPTIONS_LIST_TYPE]?: boolean };
export interface ExpireTimeValues {
  day: number;
  hour: number;
  minute: number;
}

export const MainPage: React.FC = () => {
  const [textClick, setTextClick] = useState(false);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [activeOption, setActiveOption] = useState<ActiveOptionState>(() => {
    const initialState: ActiveOptionState = {}; // initialState를 ActiveOptionState 타입으로 설정
    UPLOAD_OPTIONS_LIST.forEach((option) => {
      // UPLOAD_OPTIONS_LIST의 각 요소를 option으로 받아와서
      initialState[option] = false; // initialState에 option을 key로 하는 요소를 false로 설정
    });
    return initialState; // initialState를 반환
    // 최종적으로 activeOption의 값은 {유지기간: false, 다운로드 횟수: false, 비밀번호: false}가 됨
  });
  const [expireTime, setExpireTime] = useState<ExpireTimeValues>({
    day: 0,
    hour: 3,
    minute: 0,
  });
  const [downloadLimit, setDownloadLimit] = useState<number>(50);
  const [password, setPassword] = useState<string>('');
  const [file, setFile] = useState<{
    filename: string;
    size: string;
    fileType: string;
    fileData: File;
  }>({
    filename: '',
    size: '',
    fileType: '',
    fileData: new File([], ''),
  });

  const isFileExits = file.filename !== '' && file.size !== '' && file.fileType !== '';

  const { mutate } = useUploadFile();

  const onOptionClick = (index: number) => {
    const option = UPLOAD_OPTIONS_LIST[index];
    setActiveOption((prev) => ({ ...prev, [option]: !prev[option] }));
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
      if (textRef.current.value === '') {
        setTextClick(false);
      }
    }
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      setFile({
        filename: e.target.files[0].name,
        size: getFileSize(e.target.files[0].size),
        fileType:
          e.target.files[0].type === '' ? 'application/actet-stream' : e.target.files[0].type,
        fileData: e.target.files[0],
      });
    }
  };

  const onSubmit = () => {
    const formData = new FormData();
    formData.append('file', file.fileData);
    if (!isFileExits) {
      return toast.error('파일을 선택해주세요!', {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    mutate({
      file: formData,
      timeLimit: activeOption['유지기간']
        ? expireTime.minute + expireTime.hour * 60 + expireTime.day * 1440
        : 180,
      downloadLimit: activeOption['비밀번호'] ? downloadLimit : 100,
      password: password !== '' ? password : undefined,
    });
    setFile({
      filename: '',
      size: '',
      fileType: '',
      fileData: new File([], ''),
    });
  };

  return (
    <S.MainPageContainer>
      <S.MainPageUploadOptionWrapper>
        {UPLOAD_OPTIONS_LIST.map((option, i) => (
          <S.MainPageUploadOption onClick={() => onOptionClick(i)} key={i}>
            <S.MainPageCheckBox>
              {activeOption[option] && <S.MainPageCheckIcon />}
            </S.MainPageCheckBox>
            <S.MainPageOptionName>{option}</S.MainPageOptionName>
          </S.MainPageUploadOption>
        ))}
      </S.MainPageUploadOptionWrapper>
      {activeOption['유지기간'] && (
        <ExpireTime onExpireTimeClick={onExpireTimeClick} expireTime={expireTime} />
      )}
      {activeOption['다운로드 횟수'] && (
        <DownloadLimit setDownloadLimit={setDownloadLimit} downloadLimit={downloadLimit} />
      )}
      {activeOption['비밀번호'] && <Password setPassword={setPassword} password={password} />}
      <S.MainPageFindContainer textClick={textClick}>
        <S.MainPageTextWrapper textClick={textClick}>
          {!textClick ? (
            <>
              {!isFileExits ? (
                <>
                  <S.MainPageTextButton>NEW!</S.MainPageTextButton>
                  <S.MainPageText onClick={() => setTextClick(true)}>
                    텍스트를 붙혀넣어 보세요
                  </S.MainPageText>
                </>
              ) : (
                <>
                  <S.MainPageText>
                    이름: {file.filename} / 크기:({file.size}) / 타입: {file.fileType}
                  </S.MainPageText>
                </>
              )}
            </>
          ) : (
            <S.MainPageTextArea
              ref={textRef}
              onChange={autoHeight}
              placeholder="여기에 텍스트를 붙혀넣어 보세요"
            ></S.MainPageTextArea>
          )}
        </S.MainPageTextWrapper>
        {!textClick && (
          <S.MainPageFindFileButton id="label-file-upload" htmlFor="input-file-upload">
            파일 찾기
          </S.MainPageFindFileButton>
        )}
        <input
          id="input-file-upload"
          type={'file'}
          style={{ display: 'none' }}
          onChange={handleChangeFile}
        />
      </S.MainPageFindContainer>
      <S.MainPageUploadButton onClick={onSubmit}>업로드</S.MainPageUploadButton>
    </S.MainPageContainer>
  );
};
