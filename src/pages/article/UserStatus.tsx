import * as S from './Article.style';

const UserStatus = () => {
  return (
    <S.UserStatusWrapper>
      <img
        src='/img/ProfileImg.png'
        alt=''
        style={{
          width: '25px',
          height: '25px',
        }}
      />
      <S.Name>이무성</S.Name>
      <S.ActivityTime>00 hours age</S.ActivityTime>
    </S.UserStatusWrapper>
  );
};

export default UserStatus;
