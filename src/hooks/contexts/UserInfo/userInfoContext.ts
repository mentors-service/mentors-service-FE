import { IUserInfo } from '@@types/user';
import { createContext } from 'react';

interface defaultContext {
  userInfo: IUserInfo;
}

export default createContext<defaultContext | null>(null);
