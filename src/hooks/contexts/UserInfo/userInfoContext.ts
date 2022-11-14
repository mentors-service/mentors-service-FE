import { createContext } from 'react';

interface defaultContext {
  userInfo: { nickname: string; description: string };
}

export default createContext<defaultContext | null>(null);
