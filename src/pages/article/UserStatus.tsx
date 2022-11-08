import ProfileImg from '@assets/img/ProfileImg.png';
import * as S from './UserStatus.style';

interface IUserStatusProps {
  creater: {
    img: string;
    name: string;
  };
  createdAt: string;
}

const UserStatus = ({ creater, createdAt }: IUserStatusProps) => {
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
      <S.Name>{creater.name}</S.Name>
      <S.ActivityTime>{createdAt}</S.ActivityTime>
    </S.UserStatusWrapper>
  );
};

export default UserStatus;
