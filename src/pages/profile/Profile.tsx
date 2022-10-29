import Button from '@components/Button/Button';
import * as S from './Profile.style';

const Profile = () => {
  return (
    <>
      <S.ProfileWrapper>
        <S.Profile>
          <img src='/img/ProfileImg.png' alt='' />

          <S.ProfileInfo>
            <S.Name>이무성</S.Name>
            <S.Description>저는 5년차 개발자입니다. 주로 react 개발을 위주로 하는 중 입니다.</S.Description>
          </S.ProfileInfo>
        </S.Profile>

        <S.MentorSkills>
          <S.Mentor>멘토</S.Mentor>
          <S.Skills>Skills</S.Skills>
        </S.MentorSkills>
      </S.ProfileWrapper>

      <Button>All activity</Button>
      <Button>Article</Button>
      <Button>Comment</Button>
    </>
  );
};

export default Profile;
