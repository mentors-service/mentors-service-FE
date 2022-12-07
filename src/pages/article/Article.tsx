import { getArticle } from '@api/article';
import useToast from '@hooks/contexts/Toast/useToast';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import * as S from './Article.style';
import ArticleButton from './components/Button';
import CommentList from './components/CommentList';
import UserInfo from './components/UserInfo';

const Article = () => {
  const [commentToggle, setCommentToggle] = useState(false);
  const { id: articleId } = useParams();

  const { data: articleInfo } = useQuery(['article'], () => getArticle(articleId!), {
    onSuccess: () => {},
    onError: (err) => {
      console.log(err);
    },
    retry: false,
  });
  console.log(articleInfo);

  const { toast } = useToast();

  const { register, handleSubmit } = useForm<{ comment: string }>();

  const handleClick = () => {
    console.log('button click');
  };

  const onSubmit = (data: { comment: string }) => {
    console.log(data);
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

  if (!articleInfo) return null;

  return (
    <S.ArticleContainer>
      <S.ArticleWrapper>
        <S.ArticleTopWrapper>
          <UserInfo nickname={articleInfo.creater.nickname} createdAt={articleInfo.createdAt} />
          <S.ArticleStatus>{articleInfo.status}</S.ArticleStatus>
        </S.ArticleTopWrapper>

        <S.ArticleSection>
          <S.ArticleInfoList>
            <S.ArticleInfoWrapper>
              <S.ArticleInfoTitle>제목</S.ArticleInfoTitle>
              <S.ArticleInfoContent>{articleInfo.title}</S.ArticleInfoContent>
            </S.ArticleInfoWrapper>

            <S.ArticleInfoWrapper>
              <S.ArticleInfoTitle>장소</S.ArticleInfoTitle>
              <S.ArticleInfoContent>{articleInfo.place}</S.ArticleInfoContent>
            </S.ArticleInfoWrapper>

            <S.ArticleInfoWrapper>
              <S.ArticleInfoTitle>일정</S.ArticleInfoTitle>
              <S.ArticleInfoContent>
                {articleInfo.startDate} ~ {articleInfo.endDate}
              </S.ArticleInfoContent>
            </S.ArticleInfoWrapper>

            <S.ArticleInfoWrapper>
              <S.ArticleInfoTitle>태그</S.ArticleInfoTitle>
              <S.ArticleInfoContent>Java</S.ArticleInfoContent>
              <S.ArticleInfoContent>React</S.ArticleInfoContent>
              <S.ArticleInfoContent>Github</S.ArticleInfoContent>
            </S.ArticleInfoWrapper>
          </S.ArticleInfoList>
        </S.ArticleSection>

        <S.ArticleContent>{articleInfo.contents}</S.ArticleContent>

        <S.ScrapWrapper>
          <ArticleButton icon='scrap' text='스크랩' onClick={handleClick} />
          <ArticleButton icon='apply' text={`${articleInfo.recruit.joinCnt} / ${5}`} onClick={handleClick} />
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

      <CommentList commentList={articleInfo.comments} />
    </S.ArticleContainer>
  );
};

export default Article;
