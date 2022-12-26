import { dateFromNow } from '@utils/time';
import { useNavigate } from 'react-router-dom';

import * as S from './UserInfo.style';

interface UserInfoProps {
  nickname: string;
  createdAt: string;
  userId?: number | undefined;
}

const UserInfo = ({ nickname, createdAt, userId }: UserInfoProps) => {
  const dateText = dateFromNow(new Date(createdAt));
  const navigate = useNavigate();

  const handleClickUser = () => {
    if (userId === undefined) return;

    navigate(`/profile/${userId}`);
  };

  return (
    <S.UserInfoWrapper onClick={handleClickUser}>
      <div style={{ width: '25px', height: '25px', background: '#EBEBEB', borderRadius: '100%' }} />
      <S.UserName>{nickname}</S.UserName>

      <S.CreatedAt>{dateText}</S.CreatedAt>
    </S.UserInfoWrapper>
  );
};

export default UserInfo;
