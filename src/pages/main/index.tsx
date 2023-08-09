/** @jsxImportSource @emotion/react */

import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';

import Button from '@mui/material/Button';
import { css } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';

import { UPLOAD_OPTIONS_LIST, UPLOAD_OPTIONS_LIST_TYPE, variants } from '@/constant';
import { DownloadLimit, ExpireTime, Password } from '@/components';
import { useUploadFile, useUploadText } from '@/hooks';
import { getFileSize } from '@/utils';

import * as S from './styled';

type ActiveOptionState = { [key in UPLOAD_OPTIONS_LIST_TYPE]?: boolean };
export interface ExpireTimeValues {
  day: number;
  hour: number;
  minute: number;
}

export const MainPage: React.FC = () => {
  /** 텍스트 영역 클릭 여부 */
  const [textClick, setTextClick] = useState(false);

  /** 텍스트 영역 ref */
  const textRef = useRef<HTMLTextAreaElement>(null);

  /** 옵션 상태 관리 */
  const [activeOption, setActiveOption] = useState<ActiveOptionState>(() => {
    const initialState: ActiveOptionState = {}; // initialState를 ActiveOptionState 타입으로 설정
    UPLOAD_OPTIONS_LIST.forEach((option) => {
      // UPLOAD_OPTIONS_LIST의 각 요소를 option으로 받아와서
      initialState[option] = false; // initialState에 option을 key로 하는 요소를 false로 설정
    });
    return initialState; // initialState를 반환
    // 최종적으로 activeOption의 값은 {유지기간: false, 다운로드 횟수: false, 비밀번호: false}가 됨
  });

  /** 유지기간 상태 관리 */
  const [expireTime, setExpireTime] = useState<ExpireTimeValues>({
    day: 0,
    hour: 3,
    minute: 0,
  });

  /** 다운로드 횟수 상태 관리 */
  const [downloadLimit, setDownloadLimit] = useState<number>(50);

  /** 비밀번호 상태 관리 */
  const [password, setPassword] = useState<string>('');

  /** 파일 상태 관리 */
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

  /** 텍스트 상태 관리 */
  const [text, setText] = useState('');

  const isFileExits = file.filename !== '' && file.size !== '' && file.fileType !== '';

  const { mutate: fileMutate } = useUploadFile();
  const { mutate: textMutate } = useUploadText();

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

  const onTextChange = () => {
    const textArea = textRef.current;
    if (textArea) {
      const textAreaValue = textArea.value;

      textArea.style.height = 'auto';
      textArea.style.height = textArea.scrollHeight + 'px';

      console.log(textAreaValue);

      const newTextAreaValue = textAreaValue.replace(/\n/g, '');
      textArea.value = newTextAreaValue;

      // if (textAreaValue === '') {
      //   setTextClick(false);
      // }
      setText(textAreaValue);
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

    const options = {
      timeLimit: activeOption['유지기간']
        ? expireTime.minute + expireTime.hour * 60 + expireTime.day * 1440
        : 180,
      downloadLimit: activeOption['다운로드 횟수'] ? downloadLimit : 100,
      password: password !== '' ? password : undefined,
    };

    if (isFileExits) {
      fileMutate({
        file: formData,
        timeLimit: options.timeLimit,
        downloadLimit: options.downloadLimit,
        password: options.password,
      });
    } else if (text !== '') {
      textMutate({
        textData: text,
        timeLimit: options.timeLimit,
        downloadLimit: options.downloadLimit,
        password: options.password,
      });
    }

    if (!isFileExits && text === '') {
      toast.error('파일이나 텍스트를 입력해주세요.', {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }

    setText('');
    if (textRef.current) {
      textRef.current.value = '';
    }

    setFile({
      filename: '',
      size: '',
      fileType: '',
      fileData: new File([], ''),
    });
  };

  return (
    <S.MainPageContainer>
      <AnimatePresence>
        <S.MainPageUploadOptionWrapper>
          {UPLOAD_OPTIONS_LIST.map((option, i) => (
            <S.MainPageUploadOption onClick={() => onOptionClick(i)} key={i}>
              <S.MainPageCheckBox>
                <motion.div
                  variants={variants}
                  animate={activeOption[option] ? 'visible' : 'hidden'}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  exit={{ opacity: 0 }}
                >
                  <S.MainPageCheckIcon />
                </motion.div>
              </S.MainPageCheckBox>
              <S.MainPageOptionName>{option}</S.MainPageOptionName>
            </S.MainPageUploadOption>
          ))}
        </S.MainPageUploadOptionWrapper>
      </AnimatePresence>
      <AnimatePresence>
        {activeOption['유지기간'] && (
          <ExpireTime
            animate={activeOption['유지기간'] ? 'visible' : 'hidden'}
            onExpireTimeClick={onExpireTimeClick}
            expireTime={expireTime}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeOption['다운로드 횟수'] && (
          <DownloadLimit
            animate={activeOption['다운로드 횟수'] ? 'visible' : 'hidden'}
            setDownloadLimit={setDownloadLimit}
            downloadLimit={downloadLimit}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeOption['비밀번호'] && (
          <Password
            animate={activeOption['비밀번호'] ? 'visible' : 'hidden'}
            setPassword={setPassword}
            password={password}
          />
        )}
      </AnimatePresence>
      <S.MainPageFindContainer
        css={
          textClick &&
          css`
            display: flex;
          `
        }
      >
        <S.MainPageTextWrapper
          css={
            textClick &&
            css`
              height: auto;
              padding: 0;
            `
          }
        >
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
              onChange={onTextChange}
              placeholder="여기에 텍스트를 붙혀넣어 보세요"
            />
          )}
        </S.MainPageTextWrapper>
        {!textClick && (
          <S.MainPageFindFileButton variant="contained">
            <label id="label-file-upload" htmlFor="input-file-upload">
              파일 찾기
            </label>
          </S.MainPageFindFileButton>
        )}
        <input
          placeholder="파일 찾기"
          id="input-file-upload"
          type={'file'}
          css={css`
            display: none;
          `}
          onChange={handleChangeFile}
        />
      </S.MainPageFindContainer>
      <S.MainPageUploadButton onClick={onSubmit}>업로드</S.MainPageUploadButton>
    </S.MainPageContainer>
  );
};
