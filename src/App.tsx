import { useMemo, useState } from 'react';
import ImageUpload from './components/ImageUpload';
import MarkdownEditor from './components/MarkdownEditor';
import Result from './components/Result';
import markdownContext from './hooks/contexts/markdownContext';

const App = () => {
  const [markdownText, setMarkdownText] = useState('');
  const contextValue = useMemo(() => ({ markdownText, setMarkdownText }), [markdownText]);

  return (
    <markdownContext.Provider value={contextValue}>
      <ImageUpload />
      <MarkdownEditor />
      <Result />
    </markdownContext.Provider>
  );
};

export default App;
