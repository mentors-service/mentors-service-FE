import { IuserInfo } from '@@types/user';
import { createContext } from 'react';

interface defaultContext {
  userInfo: IuserInfo;
}

export default createContext<defaultContext | null>(null);
