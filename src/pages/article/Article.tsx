import * as S from './Article.style';
import UserStatus from './UserStatus';

const Article = () => {
  return (
    <S.ProfileWrapper>
      <S.User>
        <UserStatus />
        <S.ProgressSpan>In Progress</S.ProgressSpan>
      </S.User>

      <S.ArticleDataWrapper>
        <S.ArticleSection>
          <S.Title>Lorem Ipsum is simply dummy text</S.Title>

          <S.Place>
            <S.Label as='label'>Places</S.Label>
            <S.Span>Seoul</S.Span>
          </S.Place>

          <S.Date>
            <S.Label as='label'>Date</S.Label>
            <S.Span>2022.10.01 ~ 2022.10.01</S.Span>
          </S.Date>

          <S.Tag>
            <S.Label as='label'>Tag</S.Label>
            <S.TagSpan>Java</S.TagSpan>
            <S.TagSpan>React</S.TagSpan>
            <S.TagSpan>Github</S.TagSpan>
          </S.Tag>
        </S.ArticleSection>

        <S.ArticleContent>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </S.ArticleContent>

        <S.PersonnelStatus>
          <img src='/img/Person.png' alt='' />
          1/5
        </S.PersonnelStatus>

        <S.TextareaWrapper>
          <S.Textarea placeholder='Textarea Comment' />
          <S.PostBtn type='submit'>Post</S.PostBtn>
        </S.TextareaWrapper>
      </S.ArticleDataWrapper>

      <S.Comments>
        <S.Comment>
          <UserStatus />
          <S.CommentContent>Lorem Ipsum is simply dummy text of the printing and typesetting industry</S.CommentContent>
        </S.Comment>
        <S.Comment>
          <UserStatus />
          <S.CommentContent>Lorem Ipsum is simply dummy text of the printing and typesetting industry</S.CommentContent>
        </S.Comment>
        <S.ReplyComment>
          <UserStatus />
          <S.CommentContent>Lorem Ipsum is simply dummy text of the printing and typesetting industry</S.CommentContent>
        </S.ReplyComment>
        <S.Comment>
          <UserStatus />
          <S.CommentContent>Lorem Ipsum is simply dummy text of the printing and typesetting industry</S.CommentContent>
        </S.Comment>
      </S.Comments>
    </S.ProfileWrapper>
  );
};

export default Article;
