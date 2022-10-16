import * as S from './Article.style';

const Article = () => {
  return (
    <>
      <S.Profile>
        <S.ProfileDescription>
          <img
            src='/img/ProfileImg.png'
            alt=''
            style={{
              width: '25px',
              height: '25px',
            }}
          />
          <S.Name>이무성</S.Name>
          <S.ActivityTime></S.ActivityTime>
        </S.ProfileDescription>
        <S.ProgressBtn>In Progress</S.ProgressBtn>
      </S.Profile>
      <S.ArticleData>
        <S.Title>Lorem Ipsum is simply dummy text</S.Title>
        <S.Place>
          <label>Places</label>
          <span>Seoul</span>
        </S.Place>
        <S.Date>
          <label>Date</label>
          <span>2022.10.01 ~ 2022.10.01</span>
        </S.Date>
        <S.Tag>
          <S.TagBtn>Java</S.TagBtn>
          <S.TagBtn>React</S.TagBtn>
          <S.TagBtn>Github</S.TagBtn>
        </S.Tag>
        <S.ArticleContent>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </S.ArticleContent>
        <S.PersonnelStatus>
          <img src='/img/Person.png' alt='' />
          1/5
        </S.PersonnelStatus>

        <S.Textarea></S.Textarea>
      </S.ArticleData>
    </>
  );
};

export default Article;
