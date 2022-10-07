import ImageUpload from '@components/ImageUpload';
import MarkdownEditor from '@components/MarkdownEditor';
import Result from '@components/Result';
import MarkdownContext from '@hooks/contexts/markdownContext';
import { useMemo, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createArticle } from 'api/CrudAPI';

const Write = () => {
  const queryClient = useQueryClient();
  const [markdownText, setMarkdownText] = useState('');
  const contextValue = useMemo(() => ({ markdownText, setMarkdownText }), [markdownText]);

  const createMutaion = useMutation(createArticle, {
    onSuccess: () => {
      // update 후에 get 함수를 재실행시켜줌 (새로고침 안 해도 됨)
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
