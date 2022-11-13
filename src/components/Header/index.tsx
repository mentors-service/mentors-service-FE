import { LogoutIcon, ProfileIcon } from '@assets/svgs';
import * as S from './Header.style';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LogoName>Mentors</S.LogoName>

      <S.ButtonWrapper>
        <S.HeaderButton>
          <ProfileIcon />
        </S.HeaderButton>

        <S.HeaderButton>
          <LogoutIcon />
        </S.HeaderButton>

        <S.HeaderButton>
          <S.HeaderButtonText>Kakao Login</S.HeaderButtonText>
        </S.HeaderButton>
      </S.ButtonWrapper>
    </S.HeaderContainer>
  );
};

export default Header;
