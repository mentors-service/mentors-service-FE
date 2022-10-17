import ImageUpload from '@components/ImageUpload';
import MarkdownEditor from '@components/MarkdownEditor';
import Result from '@components/Result';
import ImageDnDWrapper from '@components/ImageDnDWrapper';
import MarkdownContext from '@hooks/contexts/markdownContext';
import { useMemo, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createArticle } from '@api/article';

const Write = () => {
  const [markdownText, setMarkdownText] = useState('');
  const contextValue = useMemo(() => ({ markdownText, setMarkdownText }), [markdownText]);

  const createMutaion = useMutation(createArticle, {
    onError: (error) => {},
  });

  const onClickAddButton = () => {
    createMutaion.mutate(markdownText);
  };

  return (
    <div>
      <MarkdownContext.Provider value={contextValue}>
        <ImageUpload />
        <ImageDnDWrapper>
          <MarkdownEditor />
        </ImageDnDWrapper>
        <Result />
      </MarkdownContext.Provider>
      <button onClick={onClickAddButton} type='submit'>
        글 작성하기
      </button>
    </div>
  );
};

export default Write;
