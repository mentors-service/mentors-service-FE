import MeInput from './components/Input';
import MeTab from './components/tab';
import * as S from './Me.style';

const Me = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('button click');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <S.MeContainer>
      <S.MyProfileWrapper>
        <S.ImageWrapper>
          <S.ImageTemp />
          <S.ImageChangeButton onClick={handleClick}>이미지 변경</S.ImageChangeButton>
        </S.ImageWrapper>

        <S.MyProfileForm onSubmit={handleSubmit}>
          <S.InputWrapper>
            <MeInput placeholder='Name' />
            <MeInput placeholder='Description' />
          </S.InputWrapper>
          <S.MyProfileChangeButton>수정하기</S.MyProfileChangeButton>
        </S.MyProfileForm>
      </S.MyProfileWrapper>

      {/* <div>
        <span>Skills</span>
        <div>생각중...</div>
      </div> */}

      <S.MyActivityWrapper>
        <MeTab />

        <ul>
          {[1, 2, 3, 4, 5].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </S.MyActivityWrapper>
    </S.MeContainer>
  );
};

export default Me;
