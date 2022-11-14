import { ITemp } from '@@types/user';
import { patchUserInfo } from '@api/user';
import useAuth from '@hooks/contexts/Auth/useAuth';
import useUserInfo from '@hooks/contexts/UserInfo/useUserInfo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import MeInput from './components/Input';
import MeTab from './components/tab';
import * as S from './Me.style';

const Me = () => {
  const queryClient = useQueryClient();
  const { logout } = useAuth();
  const { userInfo } = useUserInfo();

  const { register, handleSubmit, reset } = useForm<ITemp>();

  const { mutate: userInfoMutate } = useMutation(patchUserInfo, {
    onMutate: async (data) => {
      await queryClient.cancelQueries(['userInfo']);

      queryClient.setQueryData(['userInfo'], () => data);

      return data;
    },
    onSuccess: () => {
      reset();
    },
    onError: () => {
      logout();
    },
  });

  const handleClick = () => {
    console.log('button');
  };

  const onsubmit = (data: ITemp) => {
    userInfoMutate(data);

    console.log('submit', data);
  };

  const onError = () => {
    console.log('nickname null error');
  };

  console.log(userInfo);

  return (
    <S.MeContainer>
      <S.MyProfileWrapper>
        <S.ImageWrapper>
          <S.ImageTemp />

          <S.ImageChangeButton onClick={handleClick}>이미지 변경</S.ImageChangeButton>
        </S.ImageWrapper>

        <S.MyProfileForm onSubmit={handleSubmit(onsubmit, onError)}>
          <S.InputWrapper>
            <MeInput register={register('nickname')} placeholder={userInfo.nickname} />
            <MeInput register={register('description')} placeholder={userInfo.description || '나를 소개해주세요.'} />
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
