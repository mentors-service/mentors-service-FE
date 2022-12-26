import { ArticleInfo, ArticleButton, CommentForm, CommentList, UserInfo } from '@article/components';
import { getArticle, createComment, updateRecruit, updateScrap } from '@api/index';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useToast, useUserInfo } from '@hooks/contexts';
import { IArticle } from '@home/types';

import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';

import * as S from './Article.style';

const Article = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();
  const { id: articleId } = useParams();
  const { userInfo } = useUserInfo();
  const { toast } = useToast();

  const { data: articleInfo } = useQuery(['article', articleId], () => getArticle(articleId!), {
    onError: () => {
      toast({ type: 'ADD', payload: { status: 'ERROR', message: '게시물 에러' } });
    },
  });

  const { mutate: scrapMutate } = useMutation(updateScrap, {
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['article', articleId] });
      const previousArticle = queryClient.getQueryData(['article', articleId]);

      queryClient.setQueryData<IArticle>(['article', articleId], (prev) => {
        if (!prev) return undefined;
        if (!userInfo.id) return undefined;

        if (prev.scraps.createrIdList.includes(userInfo.id)) {
          const index = prev.scraps.createrIdList.findIndex((item) => item === userInfo.id);
          prev.scraps.createrIdList.splice(index, 1);
          toast({ type: 'ADD', payload: { status: 'INFO', message: '스크랩 취소!', time: 3000 } });
        } else {
          prev.scraps.createrIdList.push(userInfo.id);
          toast({ type: 'ADD', payload: { status: 'INFO', message: '스크랩 성공!', time: 3000 } });
        }

        return prev;
      });

      return { previousArticle };
    },
    onError: () => {
      toast({ type: 'ADD', payload: { status: 'ERROR', message: '신청 에러', time: 3000 } });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['article', articleId] });
      queryClient.invalidateQueries({ queryKey: ['articles'] });
    },
  });

  const { mutate: recruitMutate } = useMutation(updateRecruit, {
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['article', articleId] });
      const previousArticle = queryClient.getQueryData(['article', articleId]);

      queryClient.setQueryData<IArticle>(['article', articleId], (prev) => {
        if (!prev) return undefined;
        if (!userInfo.id) return undefined;

        if (prev.recruit.createrIdList.includes(userInfo.id)) {
          const index = prev.recruit.createrIdList.findIndex((item) => item === userInfo.id);
          prev.recruit.createrIdList.splice(index, 1);
          prev.recruit.joinCnt -= 1;
          toast({ type: 'ADD', payload: { status: 'INFO', message: '신청 취소!', time: 3000 } });
        } else {
          prev.recruit.createrIdList.push(userInfo.id);
          prev.recruit.joinCnt += 1;
          toast({ type: 'ADD', payload: { status: 'INFO', message: '신청 성공!', time: 3000 } });
        }

        return prev;
      });

      return { previousArticle };
    },
    onError: () => {
      toast({ type: 'ADD', payload: { status: 'ERROR', message: '신청 에러', time: 3000 } });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['article', articleId] });
      queryClient.invalidateQueries({ queryKey: ['articles'] });
    },
  });

  const { mutate: commentMutate } = useMutation(createComment, {
    onMutate: () => {
      queryClient.invalidateQueries(['article', articleId]);
      reset();
    },
    onError: () => {
      toast({ type: 'ADD', payload: { status: 'ERROR', message: '댓글 작성 에러' } });
    },
    onSettled: () => {
      setTimeout(() => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 500);
      queryClient.invalidateQueries({ queryKey: ['articles'] });
    },
  });

  const { register, handleSubmit, reset } = useForm<{ comment: string }>();

  if (!articleInfo) return null;

  return (
    <S.ArticleContainer>
      <S.ArticleWrapper>
        <S.ArticleTopWrapper>
          <UserInfo
            nickname={articleInfo.creater.nickname}
            createdAt={articleInfo.createdAt}
            userId={articleInfo.creater.id}
          />
          <S.ArticleStatus>{articleInfo.status.split('_')[1]}</S.ArticleStatus>
        </S.ArticleTopWrapper>

        <S.ArticleSection>
          <S.ArticleInfoList>
            <ArticleInfo title='제목'>{articleInfo.title}</ArticleInfo>
            <ArticleInfo title='장소'>{articleInfo.place}</ArticleInfo>
            <ArticleInfo title='일정'>
              {articleInfo.startDate} ~ {articleInfo.endDate}
            </ArticleInfo>
          </S.ArticleInfoList>
        </S.ArticleSection>

        <S.ArticleContent>{articleInfo.contents}</S.ArticleContent>
        <S.ScrapWrapper>
          <ArticleButton icon='scrap' text='스크랩' mutate={scrapMutate} isToggle={articleInfo.scraps.isScraped} />
          <ArticleButton
            icon='apply'
            text={`${articleInfo.recruit.joinCnt} / ${articleInfo.totalRecruit}`}
            mutate={recruitMutate}
            isToggle={articleInfo.recruit.isRecruited}
          />
        </S.ScrapWrapper>
      </S.ArticleWrapper>
      <CommentForm handleSubmit={handleSubmit} register={register} commentMutate={commentMutate} />
      <CommentList commentList={articleInfo.comments} />
      <div ref={scrollRef} />
    </S.ArticleContainer>
  );
};

export default Article;
