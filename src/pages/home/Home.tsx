import useIntersectionObserver from '@hooks/useIntersectionObserver';

import { BookmarkIcon, CommentIcon, GroupIcon } from '@assets/svgs';
import { Dropdown } from '@components/index';
import { getArticles } from '@api/article';
import { dateFromNow } from '@utils/time';
import { IArticle } from '@home/types';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import * as S from './Home.style';

const Home = () => {
  const navigate = useNavigate();

  const checkNextPage = (lastPage: any) => {
    // console.log(lastPage);
    // if (lastPage.page >= lastPage.total_pages) return undefined;

    return Math.floor(lastPage.length / 10) + 1;
    // return lastPage.page + 1;
    // 보내는 요청에 현재 page 값, 전체 페이지 값 필요
  };

  const {
    data = { pages: [], pageParams: 1 },
    fetchNextPage,
    isFetching,
    hasNextPage,
  } = useInfiniteQuery(['articles'], getArticles, { getNextPageParam: checkNextPage, staleTime: Infinity });

  const ref = useIntersectionObserver(fetchNextPage, Boolean(hasNextPage && !isFetching));

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`article/${e.currentTarget.value}`);
  };

  return (
    <S.HomeContainer>
      <S.SearchWrapper>
        <S.SearchInputWrapper>
          <S.SearchIcon />
          <S.SearchInput placeholder='Search' />
        </S.SearchInputWrapper>
        <S.SearchContent>검색 내용</S.SearchContent>
      </S.SearchWrapper>

      <S.TagList>
        {[1, 2, 3, 4, 5].map((item) => (
          <S.TagItem key={item}>Git</S.TagItem>
        ))}
      </S.TagList>

      <Dropdown>
        <Dropdown.Button>
          <Dropdown.Text />
          <Dropdown.Icon />
        </Dropdown.Button>

        <Dropdown.List />
      </Dropdown>

      <S.ArticleCardList>
        {data.pages.map((page) =>
          page.map((article: IArticle) => (
            <S.ArticleCardItem key={article.articleId}>
              <S.ArticleCardButton onClick={handleClick} value={article.articleId}>
                <S.ArticleCardTopWrapper>
                  <S.ArticleCardTitle>{article.title}</S.ArticleCardTitle>
                  <S.ArticleCardStatus>{article.status}</S.ArticleCardStatus>
                </S.ArticleCardTopWrapper>

                <S.ArticleCardContent>{article.contents}</S.ArticleCardContent>

                <S.ArticleCardBottomWrapper>
                  <S.ArticleUserProfileWrapper>
                    <S.UserImageTemp />
                    <S.UserName>{article.creater.nickname}</S.UserName>
                    <S.ArticleCreateAt dateTime={String(new Date(article.createdAt))}>
                      {dateFromNow(new Date(article.createdAt))}
                    </S.ArticleCreateAt>
                  </S.ArticleUserProfileWrapper>

                  <S.ArticleInfoWrapper>
                    <S.ArticleInfoGroup>
                      <GroupIcon width={20} height={20} />
                      <S.ArticleInfoText>{article.recruit.joinCnt}</S.ArticleInfoText>
                    </S.ArticleInfoGroup>

                    <S.ArticleInfoGroup>
                      <CommentIcon width={20} height={20} />
                      <S.ArticleInfoText>{article.commentCnt}</S.ArticleInfoText>
                    </S.ArticleInfoGroup>

                    <S.ArticleInfoGroup>
                      <BookmarkIcon width={20} height={20} />
                      <S.ArticleInfoText>{article.scraps.scrapCnt}</S.ArticleInfoText>
                    </S.ArticleInfoGroup>
                  </S.ArticleInfoWrapper>
                </S.ArticleCardBottomWrapper>
              </S.ArticleCardButton>
            </S.ArticleCardItem>
          ))
        )}
      </S.ArticleCardList>

      <div ref={ref} style={{ height: '50px' }} />
    </S.HomeContainer>
  );
};

export default Home;
