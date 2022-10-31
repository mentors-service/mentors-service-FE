import { BookmarkIcon, CommentIcon, GroupIcon, KeyboardArrowDownIcon } from '@assets/svgs';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import * as S from './Home.style';

const Home = () => {
  const getArticles = async ({ pageParam = 1 }) => {
    const data = await axios.get(`https://reqres.in/api/users?page=${pageParam}`).then((res) => res.data);

    return data;
  };

  const checkNextPage = (lastPage: any) => {
    if (lastPage.page >= lastPage.total_pages) return undefined;

    return lastPage.page + 1;
  };

  const {
    data = { pages: [], pageParams: 1 },
    fetchNextPage,
    isFetching,
    hasNextPage,
  } = useInfiniteQuery(['temp'], getArticles, { getNextPageParam: checkNextPage });

  const ref = useIntersectionObserver(fetchNextPage, Boolean(hasNextPage && !isFetching));

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

      <S.HomeDropdown>
        <S.HomeDropdownText>Filter</S.HomeDropdownText>
        <KeyboardArrowDownIcon width={24} height={24} />
      </S.HomeDropdown>

      <S.ArticleCardList>
        {[1].map((item) => (
          <S.ArticleCardItem key={item}>
            <S.ArticleCardButton>
              <S.ArticleCardTopWrapper>
                <S.ArticleCardTitle>멘토링 모집</S.ArticleCardTitle>
                <S.ArticleCardStatus>In Progress</S.ArticleCardStatus>
              </S.ArticleCardTopWrapper>

              <S.ArticleCardContent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, dolore molestias culpa facilis aut
                quam quasi quo veniam quas aperiam laboriosam itaque, dignissimos eaque provident architecto suscipit
                eligendi, dicta mollitia!
              </S.ArticleCardContent>

              <S.ArticleCardBottomWrapper>
                <S.ArticleUserProfileWrapper>
                  <S.UserImageTemp />
                  <S.UserName>Name</S.UserName>
                  <S.ArticleCreateAt dateTime='2022-10-29'>00 hours ago</S.ArticleCreateAt>
                </S.ArticleUserProfileWrapper>

                <S.ArticleInfoWrapper>
                  <S.ArticleInfoGroup>
                    <GroupIcon width={20} height={20} />
                    <S.ArticleInfoText>1/5</S.ArticleInfoText>
                  </S.ArticleInfoGroup>

                  <S.ArticleInfoGroup>
                    <CommentIcon width={20} height={20} />
                    <S.ArticleInfoText>2</S.ArticleInfoText>
                  </S.ArticleInfoGroup>

                  <S.ArticleInfoGroup>
                    <BookmarkIcon width={20} height={20} />
                    <S.ArticleInfoText>2</S.ArticleInfoText>
                  </S.ArticleInfoGroup>
                </S.ArticleInfoWrapper>
              </S.ArticleCardBottomWrapper>
            </S.ArticleCardButton>
          </S.ArticleCardItem>
        ))}
      </S.ArticleCardList>

      {data.pages.map((page) =>
        page.data.map((item: any) => (
          <li key={item.id}>
            <b>{item.avatar}</b>
            <p>{item.email}</p>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim, laboriosam voluptates nemo
              dolores corporis exercitationem repudiandae rem facilis magnam quae quos molestiae delectus vel maiores
              ea,
            </div>
            <span>{item.first_name}</span>
            <span>{item.last_name}</span>
          </li>
        ))
      )}

      <div ref={ref} />
      <div>Infinite Scroll</div>
    </S.HomeContainer>
  );
};

export default Home;
