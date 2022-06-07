import { atom } from 'recoil';
import { auth } from '../initialState/auth';

export const userAtom = atom({
  key: '@userAtom',
  default: { ...auth }
});
