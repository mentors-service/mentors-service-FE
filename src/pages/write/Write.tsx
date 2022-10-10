import ImageUpload from '@components/ImageUpload';
import MarkdownEditor from '@components/MarkdownEditor';
import Result from '@components/Result';
import MarkdownContext from '@hooks/contexts/markdownContext';
import { useMemo, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createArticle } from 'api/crudAPI';

const Write = () => {
  const queryClient = useQueryClient();
  const [markdownText, setMarkdownText] = useState('');
  const contextValue = useMemo(() => ({ markdownText, setMarkdownText }), [markdownText]);

  const createMutaion = useMutation(createArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries(['articles']);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onClickAddButton = () => {
    createMutaion.mutate();
  };

  return (
    <div>
      <MarkdownContext.Provider value={contextValue}>
        <ImageUpload />
        <MarkdownEditor />
        <Result />
      </MarkdownContext.Provider>
      <button onClick={onClickAddButton} type='button'>
        글쓰기
      </button>
    </div>
  );
};

export default Write;
