import { createContext } from 'react';

interface defaultContext {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  login: (token: string) => void;
  logout: () => void;
}

export default createContext<defaultContext | null>(null);
