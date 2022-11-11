import ProfileImg from '@assets/img/ProfileImg.png';
import { dateFromNow } from '@utils/time';
import * as S from './UserInfo.style';

interface IUserInfoProps {
  creater: { img: string; name: string };
  createdAt: string;
}

const UserStatus = ({ creater, createdAt }: IUserInfoProps) => {
  const dateText = dateFromNow(new Date(createdAt));

  return (
    <S.UserInfoWrapper>
      <img src={ProfileImg} alt='' style={{ width: '25px', height: '25px' }} />
      <S.UserName>{creater.name}</S.UserName>

      <S.CreatedAt>{dateText}</S.CreatedAt>
    </S.UserInfoWrapper>
  );
};

export default UserStatus;
