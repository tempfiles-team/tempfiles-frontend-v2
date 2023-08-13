import { atom } from 'recoil';

export const checkFile = atom({
  key: 'isFile',
  default: null as boolean | null,
});
