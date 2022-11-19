import { BookmarkIcon, CommentIcon, GroupIcon, ProfileImgIcon } from '@assets/svgs';
import { useState } from 'react';
import * as S from './Profile.style';

const Profile = () => {
  const tags = [
    { tag: 'Java', id: 0 },
    { tag: 'React', id: 1 },
    { tag: 'Github', id: 2 },
  ];

  const [articleStatus, setArticleStatus] = useState(true);

  return (
    <S.ProfileWrapper>
      <S.Profile>
        <ProfileImgIcon width='100' height='100' />

        <S.ProfileInfo>
          <S.Name>이무성</S.Name>
          <S.Description>저는 5년차 개발자입니다. 주로 react 개발을 위주로 하는 중 입니다.</S.Description>
        </S.ProfileInfo>
      </S.Profile>

      <S.MentorSkills>
        <S.Label>Skills</S.Label>
        {tags.map((tag) => {
          return (
            <S.SkillsWrapper key={tag.id}>
              <span>{tag.tag}</span>
            </S.SkillsWrapper>
          );
        })}
      </S.MentorSkills>

      <S.MyPost>
        <p>게시글</p>
        <S.ArticleCardList>
          {[1, 2, 3].map((item) => (
            <S.ArticleCardItem key={item}>
              <S.ArticleCardButton>
                <S.ArticleCardTopWrapper>
                  <S.ArticleCardTitle>멘토링 모집</S.ArticleCardTitle>
                  {articleStatus ? (
                    <S.ArticleCardStatus articleStatus={articleStatus}>In Progress</S.ArticleCardStatus>
                  ) : (
                    <S.ArticleCardStatus articleStatus={articleStatus}>Completed</S.ArticleCardStatus>
                  )}
                </S.ArticleCardTopWrapper>

                <S.ArticleCardBottomWrapper>
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
      </S.MyPost>
    </S.ProfileWrapper>
  );
};

export default Profile;
