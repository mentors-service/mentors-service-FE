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

  const checkNextPage = (lastPage: { currentPage: number; totalPages: number; data: [] }) => {
    if (lastPage.currentPage >= lastPage.totalPages) return undefined;

    return lastPage.currentPage + 1;
  };

  const {
    data = { pages: [], pageParams: 1 },
    fetchNextPage,
    isFetching,
    hasNextPage,
  } = useInfiniteQuery(['articles'], getArticles, {
    getNextPageParam: checkNextPage,
    staleTime: Infinity,
  });

  const ref = useIntersectionObserver(fetchNextPage, Boolean(hasNextPage && !isFetching));

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`article/${e.currentTarget.value}`);
  };

  const handleClickWrite = () => {
    navigate('/write');
    window.scrollTo(0, 0);
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

      <Dropdown>
        <Dropdown.Button>
          <Dropdown.Text />
          <Dropdown.Icon />
        </Dropdown.Button>

        <Dropdown.List />
      </Dropdown>

      <S.ArticleCardList>
        {data.pages.map((page) =>
          page.data.map((article: IArticle) => (
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
                      <S.ArticleInfoText>{`${article.recruit.joinCnt} / ${article.totalRecruit}`}</S.ArticleInfoText>
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
      <S.WriteButtonWrpper onClick={handleClickWrite}>
        <span>Write</span>
      </S.WriteButtonWrpper>

      <div ref={ref} style={{ height: '50px' }} />
    </S.HomeContainer>
  );
};

export default Home;
