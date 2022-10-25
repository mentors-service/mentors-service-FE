import MeInput from './components/Input';
import * as S from './Me.style';

const MYACTIVITY_LIST = ['Article', 'Comment', 'Scrap'];

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
      <S.Temp>
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
      </S.Temp>

      <div>
        <span>Skills</span>
        <div>생각중...</div>
      </div>

      <ul>
        {MYACTIVITY_LIST.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </S.MeContainer>
  );
};

export default Me;
