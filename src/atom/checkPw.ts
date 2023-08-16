import { atom } from 'recoil';

export const checkPwState = atom({
  key: 'checkPwState',
  default: {
    isEncrypt: false,
    token: '',
  },
});
