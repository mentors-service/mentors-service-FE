import useUserInfo from '@hooks/contexts/UserInfo/useUserInfo';
import MeInput from './components/Input';
import MeTab from './components/tab';
import * as S from './Me.style';

const Me = () => {
  const { userInfo } = useUserInfo();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('button click');
  };

  console.log(userInfo);

  return (
    <S.MeContainer>
      <S.MyProfileWrapper>
        <S.ImageWrapper>
          <S.ImageTemp />

          <S.ImageChangeButton onClick={handleClick}>이미지 변경</S.ImageChangeButton>
        </S.ImageWrapper>

        <S.MyProfileForm onSubmit={handleSubmit}>
          <S.InputWrapper>
            <MeInput placeholder={userInfo.nickname} />
            <MeInput placeholder={userInfo.description ?? '나를 소개해주세요.'} />
          </S.InputWrapper>

          <S.MyProfileChangeButton>수정하기</S.MyProfileChangeButton>
        </S.MyProfileForm>
      </S.MyProfileWrapper>

      <S.MyActivityWrapper>
        <MeTab />

        <S.MyActivityList>
          {[1, 2, 3, 4, 5].map((item) => (
            <S.MyActivityItem key={item}>
              <S.MyActivityButton onClick={handleClick}>
                <S.MyActivityTitle>게시물 제목</S.MyActivityTitle>
                <S.MyActivityContent>내용...</S.MyActivityContent>
                <S.MyActivityCreatedAt dateTime='2022-10-26'>2022-10-26</S.MyActivityCreatedAt>
              </S.MyActivityButton>
            </S.MyActivityItem>
          ))}
        </S.MyActivityList>
      </S.MyActivityWrapper>
    </S.MeContainer>
  );
};

export default Me;
