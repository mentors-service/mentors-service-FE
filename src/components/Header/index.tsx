import * as S from './Header.style';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.LogoName>Mentors</S.LogoName>

      <S.BtnWrapper>
        <button type='button'>
          <img src='/img/ProfileBtn.png' alt='' />
        </button>

        <button type='button'>
          <img src='/img/LogoutBtn.png' alt='' />
        </button>
      </S.BtnWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
