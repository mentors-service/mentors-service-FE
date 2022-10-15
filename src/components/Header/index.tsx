import * as S from './Header.style';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.LogoName>Mentors</S.LogoName>
      <S.BtnWrapper>
        <S.HeaderBtn>
          <img src='/img/ProfileBtn.png' alt='' />
        </S.HeaderBtn>
        <S.HeaderBtn>
          <img src='/img/LogoutBtn.png' alt='' />
        </S.HeaderBtn>
      </S.BtnWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
