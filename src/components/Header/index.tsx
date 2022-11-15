import { LogoutIcon, ProfileIcon } from '@assets/svgs';
import * as S from './Header.style';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LogoName>Mentors</S.LogoName>

      <S.ButtonWrapper>
        <S.HeaderButton>
          <ProfileIcon width='24' height='24' />
        </S.HeaderButton>

        <S.HeaderButton>
          <LogoutIcon width='24' height='24' />
        </S.HeaderButton>

        <S.HeaderButton>
          <S.HeaderButtonText>Kakao Login</S.HeaderButtonText>
        </S.HeaderButton>
      </S.ButtonWrapper>
    </S.HeaderContainer>
  );
};

export default Header;
