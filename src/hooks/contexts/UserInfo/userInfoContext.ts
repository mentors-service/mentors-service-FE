import { IUserInfo } from '@@types/user';
import { createContext } from 'react';

interface defaultContext {
  userInfo: any;
}

export default createContext<defaultContext | null>(null);
