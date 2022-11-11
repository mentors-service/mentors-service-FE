import { ProfileIcon, ScrapIcon } from '@assets/svgs';
import * as S from './Article.style';
import CommentList from './components/CommentList';
import UserStatus from './components/UserStatus';

const Article = () => {
  const userStatusData = {
    creater: {
      img: 'val',
      name: 'Name',
    },
    createdAt: '20221024',
  };
  return (
    <S.ProfileWrapper>
      <S.ArticleWrapper>
        <S.User>
          <UserStatus creater={userStatusData.creater} createdAt={userStatusData.createdAt} />
          <S.ProgressSpan>In Progress</S.ProgressSpan>
        </S.User>

        <S.ArticleSection>
          <S.Dl>
            <div>
              <S.Dt>제목</S.Dt>
              <S.Dd>멘토링 모집</S.Dd>
            </div>

            <div>
              <S.Dt>장소</S.Dt>
              <S.Dd>Seoul</S.Dd>
            </div>

            <div>
              <S.Dt>일정</S.Dt>
              <S.Dd>2022.10.01 ~ 2022.10.01</S.Dd>
            </div>

            <div>
              <S.Tag>태그</S.Tag>
              <S.TagSpan>Java</S.TagSpan>
              <S.TagSpan>React</S.TagSpan>
              <S.TagSpan>Github</S.TagSpan>
            </div>
          </S.Dl>
        </S.ArticleSection>

        <S.ArticleContent>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </S.ArticleContent>

        <S.ScrapWrapper>
          <S.Scrap>
            <button type='button'>
              <ScrapIcon width='20' height='20' />
              <span>스크랩</span>
            </button>
          </S.Scrap>

          <S.PersonnelStatus>
            <button type='button'>
              <ProfileIcon width='20' height='20' />
              <span> 1/5</span>
            </button>
          </S.PersonnelStatus>
        </S.ScrapWrapper>
      </S.ArticleWrapper>

      <S.TextareaWrapper>
        <S.Textarea placeholder='Textarea Comment' />
        <S.PostBtn type='submit'>Post</S.PostBtn>
      </S.TextareaWrapper>

      <CommentList />
    </S.ProfileWrapper>
  );
};

export default Article;
