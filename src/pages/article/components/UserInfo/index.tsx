import { dateFromNow } from '@utils/time';
import * as S from './UserInfo.style';

interface UserInfoProps {
  creater: { img: string; name: string };
  createdAt: string;
}

const UserInfo = ({ creater, createdAt }: UserInfoProps) => {
  const dateText = dateFromNow(new Date(createdAt));

  return (
    <S.UserInfoWrapper>
      <div style={{ width: '25px', height: '25px', background: '#EBEBEB', borderRadius: '100%' }} />
      <S.UserName>{creater.name}</S.UserName>

      <S.CreatedAt>{dateText}</S.CreatedAt>
    </S.UserInfoWrapper>
  );
};

export default UserInfo;
