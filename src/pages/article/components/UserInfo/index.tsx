import { dateFromNow } from '@utils/time';
import * as S from './UserInfo.style';

interface UserInfoProps {
  nickname: string;
  createdAt: string;
}

const UserInfo = ({ nickname, createdAt }: UserInfoProps) => {
  const dateText = dateFromNow(new Date(createdAt));

  return (
    <S.UserInfoWrapper>
      <div style={{ width: '25px', height: '25px', background: '#EBEBEB', borderRadius: '100%' }} />
      <S.UserName>{nickname}</S.UserName>

      <S.CreatedAt>{dateText}</S.CreatedAt>
    </S.UserInfoWrapper>
  );
};

export default UserInfo;
