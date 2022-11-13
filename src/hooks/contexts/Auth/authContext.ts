import { createContext } from 'react';

interface defaultContext {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default createContext<defaultContext | null>(null);
