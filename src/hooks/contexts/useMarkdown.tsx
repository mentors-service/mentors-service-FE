import { useContext } from 'react';
import markdownContext from './markdownContext';

const useMarkdown = () => {
  const state = useContext(markdownContext);
  if (!state) {
    throw new Error('useMarkdown must be used within a <Toggle />');
  }

  return state;
};

export default useMarkdown;
