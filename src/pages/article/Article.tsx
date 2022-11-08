import { ProfileIcon } from '@assets/svgs';
import * as S from './Article.style';
import Comments from './Comments';
import UserStatus from './UserStatus';

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
      <S.User>
        <UserStatus creater={userStatusData.creater} createdAt={userStatusData.createdAt} />
        <S.ProgressSpan>In Progress</S.ProgressSpan>
      </S.User>

      <S.ArticleSection>
        <S.Title>Lorem Ipsum is simply dummy text</S.Title>

        <S.Dl>
          <div>
            <S.Dt>Places</S.Dt>
            <S.Dd>Seoul</S.Dd>
          </div>

          <div>
            <S.Dt>Date</S.Dt>
            <S.Dd>2022.10.01 ~ 2022.10.01</S.Dd>
          </div>

          <div>
            <S.Dt>Tag</S.Dt>
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

      <S.PersonnelStatus>
        <div>
          <ProfileIcon />
          <span> 1/5</span>
        </div>
      </S.PersonnelStatus>

      <S.TextareaWrapper>
        <S.Textarea placeholder='Textarea Comment' />
        <S.PostBtn type='submit'>Post</S.PostBtn>
      </S.TextareaWrapper>

      <Comments />
    </S.ProfileWrapper>
  );
};

export default Article;
