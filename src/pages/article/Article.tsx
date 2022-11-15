import useToast from '@hooks/contexts/Toast/useToast';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './Article.style';
import ArticleButton from './components/Button';
import CommentList from './components/CommentList';
import UserInfo from './components/UserInfo';

const Article = () => {
  const [commentToggle, setCommentToggle] = useState(false);

  const { toast } = useToast();

  const userStatusData = { creater: { img: 'val', name: 'Name' }, createdAt: '2022-11-11 22:57:00' };

  const { register, handleSubmit } = useForm<{ comment: string }>();

  const handleClick = () => {
    console.log('button click');
  };

  const onSubmit = (data: { comment: string }) => {
    console.log(data);
  };

  const onError = () => {
    toast({ type: 'ADD', payload: { type: 'ERROR', message: '댓글을 입력해주세요.', time: 3000 } });
  };

  const handleSelect = () => {
    setCommentToggle(true);
  };

  const handleBlur = () => {
    setCommentToggle(false);
  };

  return (
    <S.ArticleContainer>
      <S.ArticleWrapper>
        <S.ArticleTopWrapper>
          <UserInfo creater={userStatusData.creater} createdAt={userStatusData.createdAt} />
          <S.ArticleStatus>In Progress</S.ArticleStatus>
        </S.ArticleTopWrapper>

        <S.ArticleSection>
          <S.ArticleInfoList>
            <S.ArticleInfoWrapper>
              <S.ArticleInfoTitle>제목</S.ArticleInfoTitle>
              <S.ArticleInfoContent>멘토링 모집</S.ArticleInfoContent>
            </S.ArticleInfoWrapper>

            <S.ArticleInfoWrapper>
              <S.ArticleInfoTitle>장소</S.ArticleInfoTitle>
              <S.ArticleInfoContent>Seoul</S.ArticleInfoContent>
            </S.ArticleInfoWrapper>

            <S.ArticleInfoWrapper>
              <S.ArticleInfoTitle>일정</S.ArticleInfoTitle>
              <S.ArticleInfoContent>2022.10.01 ~ 2022.10.01</S.ArticleInfoContent>
            </S.ArticleInfoWrapper>

            <S.ArticleInfoWrapper>
              <S.ArticleInfoTitle>태그</S.ArticleInfoTitle>
              <S.ArticleInfoContent>Java</S.ArticleInfoContent>
              <S.ArticleInfoContent>React</S.ArticleInfoContent>
              <S.ArticleInfoContent>Github</S.ArticleInfoContent>
            </S.ArticleInfoWrapper>
          </S.ArticleInfoList>
        </S.ArticleSection>

        <S.ArticleContent>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </S.ArticleContent>

        <S.ScrapWrapper>
          <ArticleButton icon='scrap' text='스크랩' onClick={handleClick} />
          <ArticleButton icon='apply' text='1 / 5' onClick={handleClick} />
        </S.ScrapWrapper>
      </S.ArticleWrapper>

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

      <CommentList />
    </S.ArticleContainer>
  );
};

export default Article;
