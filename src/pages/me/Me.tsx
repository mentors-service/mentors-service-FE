import { useAuth, useToast, useUserInfo } from '@hooks/contexts';
import { MeInput, MeTab } from '@me/components';
import { patchUserInfo } from '@api/user';
import { IUserInfo } from '@@types/user';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import * as S from './Me.style';

const Me = () => {
  const queryClient = useQueryClient();
  const { logout } = useAuth();
  const { userInfo } = useUserInfo();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserInfo>();

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

  const onsubmit = (data: IUserInfo) => {
    userInfoMutate(data);
  };

  const onError = () => {
    toast({ type: 'ADD', payload: { status: 'ERROR', message: '닉네임을 입력해주세요.', time: 3000 } });
  };

  return (
    <S.MeContainer>
      <S.MyProfileWrapper>
        <S.ImageWrapper>
          <S.ImageTemp />

          <S.ImageChangeButton onClick={handleClick}>이미지 변경</S.ImageChangeButton>
        </S.ImageWrapper>

        <S.MyProfileForm onSubmit={handleSubmit(onsubmit, onError)}>
          <S.InputWrapper>
            <MeInput
              register={register('nickname', { required: true })}
              isError={Boolean(errors.nickname)}
              placeholder={userInfo.nickname}
            />
            <MeInput
              register={register('description')}
              isError={Boolean(errors.description)}
              placeholder={userInfo.description || '나를 소개해주세요.'}
            />
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
