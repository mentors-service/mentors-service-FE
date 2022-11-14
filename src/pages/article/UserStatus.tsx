import { ProfileImgIcon } from '@assets/svgs';
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
      <ProfileImgIcon width='25' height='25' />
      <S.Name>{creater.name}</S.Name>
      <S.ActivityTime>{createdAt}</S.ActivityTime>
    </S.UserStatusWrapper>
  );
};

export default UserStatus;
