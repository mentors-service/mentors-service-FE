import { BookmarkIcon, CommentIcon, GroupIcon, KeyboardArrowDownIcon } from '@assets/svgs';
import * as S from './Home.style';

const Home = () => {
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
        {[1, 2, 3, 4].map((item) => (
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
    </S.HomeContainer>
  );
};

export default Home;
