import { createContext } from 'react';

interface defaultContext {
  markdownText: string;
  setMarkdownText: React.Dispatch<React.SetStateAction<string>>;
}

export default createContext<defaultContext | null>(null);
