import * as S from './UserStatus.style';
import ProfileImg from '../../assets/img/ProfileImg.png';

const UserStatus = () => {
  return (
    <S.UserStatusWrapper>
      <img
        src={ProfileImg}
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
