import { API_SUFFIX } from '@/api';

export interface ApiItem {
  apiId: string;
  url: string;
  method: string;
  description: string;
  curl: string;
}

export interface ApiListItem {
  file: ApiItem[];
  text: ApiItem[];
}

export const API_LIST: ApiListItem = {
  file: [
    {
      apiId: '/files',
      url: `${API_SUFFIX.BASEURL}${API_SUFFIX.FILES}`,
      method: '/files / method: GET',
      description: '서버에 존재하는 모든 파일에 대한 정보를 반환해요.',
      curl: `curl ${API_SUFFIX.BASEURL}/files`,
    },
    {
      apiId: '/file',
      url: `${API_SUFFIX.BASEURL}${API_SUFFIX.FILE}/[file_id]`,
      method: '/file/[file_id] / method: GET',
      description: '서버에 존재하는 특정 파일에 대한 세부 정보를 반환해요.',
      curl: `curl ${API_SUFFIX.BASEURL}${API_SUFFIX.FILE}/[file_id]`,
    },
    {
      apiId: '/file-upload',
      url: `${API_SUFFIX.BASEURL}${API_SUFFIX.UPLOAD}`,
      method: '/upload / method: POST',
      description: '특정 파일을 서버에 업로드해요.',
      curl: `curl -X POST -F 'file=@[filepath or filename]' ${API_SUFFIX.BASEURL}${API_SUFFIX.UPLOAD}`,
    },
    {
      apiId: '/file-dl',
      url: `${API_SUFFIX.BASEURL}${API_SUFFIX.DOWNLOAD}/[file_id]`,
      method: '/dl/[file_id] / method: GET',
      description: '서버에 존재하는 특정 파일을 다운로드해요.',
      curl: `curl ${API_SUFFIX.BASEURL}${API_SUFFIX.DOWNLOAD}/[file_id]`,
    },
    {
      apiId: '/file-del',
      url: `${API_SUFFIX.BASEURL}${API_SUFFIX.FILE}/[file_id]`,
      method: '/api/[file_id] / method: DELETE',
      description: '서버에 존재하는 특정 파일을 삭제해요.',
      curl: `curl -X DELETE ${API_SUFFIX.BASEURL}${API_SUFFIX.FILE}/[file_id]`,
    },
  ],
  text: [
    {
      apiId: '/texts',
      url: `${API_SUFFIX.BASEURL}${API_SUFFIX.TEXTS}`,
      method: '/texts / method: GET',
      description: '서버에 존재하는 모든 텍스트에 대한 정보를 반환해요.',
      curl: `curl ${API_SUFFIX.BASEURL}/${API_SUFFIX.TEXTS}`,
    },
    {
      apiId: '/text',
      url: `${API_SUFFIX.BASEURL}${API_SUFFIX.TEXT}/[text_id]`,
      method: '/text/[text_id] / method: GET',
      description: '서버에 존재하는 특정 텍스트에 대한 세부 정보를 반환해요.',
      curl: `curl ${API_SUFFIX.BASEURL}${API_SUFFIX.TEXT}/[text_id]`,
    },
    {
      apiId: '/text-upload',
      url: `${API_SUFFIX.BASEURL}${API_SUFFIX.TEXT}${API_SUFFIX.TEXT_UPLOAD}`,
      method: '/text/new / method: POST',
      description: '새로운 텍스트를 서버에 업로드해요.',
      curl: `curl -X POST ${API_SUFFIX.BASEURL}${API_SUFFIX.TEXT}${API_SUFFIX.TEXT_UPLOAD} -H accept: application/json -d '여기에 텍스트 입력' `,
    },
    {
      apiId: '/text-del',
      url: `${API_SUFFIX.BASEURL}${API_SUFFIX.TEXT}/[text_id]`,
      method: '/text/[text_id] / method: DELETE',
      description: '서버에 존재하는 특정 텍스트를 삭제해요.',
      curl: `curl -X DELETE ${API_SUFFIX.BASEURL}${API_SUFFIX.TEXT}/[text_id]`,
    },
  ],
};
