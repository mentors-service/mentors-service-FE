import { createContext } from 'react';

interface defaultContext {
  handleClickContent: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleClickDropdown: () => void;
  dropdownText: string;
  isOpened: boolean;
}

export default createContext<defaultContext | null>(null);
