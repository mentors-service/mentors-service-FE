import { LogoutIcon, ProfileIcon } from '@assets/svgs';
import { useAuth } from '@hooks/contexts';

import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './Header.style';

const Header = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickLogo = () => {
    navigate('/');
  };

  const handelClickProfile = () => {
    navigate('me');
  };

  const handleClickLogin = () => {
    sessionStorage.setItem('prevPath', location.pathname);
    window.location.href = process.env.REACT_APP_KAKAO_OAUTH_URL!;
  };

  const handleClickLogout = () => {
    logout();
  };

  return (
    <S.HeaderContainer>
      <S.LogoButton onClick={handleClickLogo}>
        <S.LogoName>Mentors</S.LogoName>
      </S.LogoButton>

      <S.ButtonWrapper>
        {isLoggedIn && (
          <S.HeaderButton onClick={handelClickProfile}>
            <ProfileIcon width={24} height={24} />
          </S.HeaderButton>
        )}

        {isLoggedIn && (
          <S.HeaderButton onClick={handleClickLogout}>
            <LogoutIcon width={24} height={24} />
          </S.HeaderButton>
        )}

        {!isLoggedIn && (
          <S.HeaderButton onClick={handleClickLogin}>
            <S.HeaderButtonText>Kakao Login</S.HeaderButtonText>
          </S.HeaderButton>
        )}
      </S.ButtonWrapper>
    </S.HeaderContainer>
  );
};

export default Header;
