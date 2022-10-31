import { LogoutIcon, ProfileIcon } from '@assets/svgs';
import * as S from './Header.style';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.LogoName>Mentors</S.LogoName>

      <S.BtnWrapper>
        <button type='button'>
          <ProfileIcon />
        </button>

        <button type='button'>
          <LogoutIcon />
        </button>
      </S.BtnWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
