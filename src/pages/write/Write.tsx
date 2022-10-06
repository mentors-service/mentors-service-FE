import ImageUpload from '@components/ImageUpload';
import MarkdownEditor from '@components/MarkdownEditor';
import Result from '@components/Result';
import MarkdownContext from '@hooks/contexts/markdownContext';
import { useMemo, useState } from 'react';

const Write = () => {
  const [markdownText, setMarkdownText] = useState('');
  const contextValue = useMemo(() => ({ markdownText, setMarkdownText }), [markdownText]);

  return (
    <MarkdownContext.Provider value={contextValue}>
      <ImageUpload />
      <MarkdownEditor />
      <Result />
    </MarkdownContext.Provider>
  );
};

export default Write;
