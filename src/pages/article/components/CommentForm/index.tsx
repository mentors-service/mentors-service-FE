import { useToast } from '@hooks/contexts';

import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { UseMutateFunction } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { useState } from 'react';

import * as S from './CommentForm.style';

interface CommnetFormProps {
  handleSubmit: UseFormHandleSubmit<{ comment: string }>;
  register: UseFormRegister<{ comment: string }>;
  commentMutate: UseMutateFunction<AxiosResponse<any, any>, unknown, any, void>;
}

const CommnetForm = ({ handleSubmit, register, commentMutate }: CommnetFormProps) => {
  const [commentToggle, setCommentToggle] = useState(false);
  const { toast } = useToast();
  const { id: articleId } = useParams();

  const onSubmit = (data: { comment: string }) => {
    commentMutate({ contents: data.comment, articleId: articleId! });
  };

  const onError = () => {
    toast({ type: 'ADD', payload: { status: 'ERROR', message: '댓글을 입력해주세요.', time: 3000 } });
  };

  const handleSelect = () => {
    setCommentToggle(true);
  };

  const handleBlur = () => {
    setCommentToggle(false);
  };

  return (
    <S.CommentFormWrapper>
      <S.CommentForm onSubmit={handleSubmit(onSubmit, onError)}>
        <S.Textarea
          {...register('comment', { required: true })}
          onSelect={handleSelect}
          onBlur={handleBlur}
          placeholder='Textarea Comment'
          $toggle={commentToggle}
        />
        <S.PostButton>Post</S.PostButton>
      </S.CommentForm>
    </S.CommentFormWrapper>
  );
};

export default CommnetForm;
