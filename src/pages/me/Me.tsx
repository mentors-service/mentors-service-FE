import { useAuth, useToast, useUserInfo } from '@hooks/contexts';
import { MeInput, MeTab } from '@me/components';
import { patchUserInfo } from '@api/user';
import { useState } from 'react';
import { IUserInfo } from '@@types/user';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { dateFromNow } from '@utils/time';
import { useNavigate } from 'react-router-dom';
import * as S from './Me.style';

const Me = () => {
  const [currentTab, setCurrentTab] = useState<string>('Article');

  const queryClient = useQueryClient();
  const { logout } = useAuth();
  const { userInfo } = useUserInfo();
  const { toast } = useToast();
  const navigate = useNavigate();

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

  const handleClick = () => {};

  const onsubmit = (data: IUserInfo) => {
    userInfoMutate(data);
  };

  const onError = () => {
    toast({ type: 'ADD', payload: { status: 'ERROR', message: '닉네임을 입력해주세요.', time: 3000 } });
  };

  const handleClickCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.value === undefined) return;

    navigate(`/article/${e.currentTarget.value}`);
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
        <MeTab setCurrentTab={setCurrentTab} currentTab={currentTab} />

        <S.MyActivityList>
          {currentTab === 'Article' &&
            userInfo?.articles?.data?.map((item: any) => (
              <S.MyActivityItem key={item.articleId}>
                <S.MyActivityButton onClick={handleClickCard} value={item.articleId}>
                  <S.MyActivityTitle>{item.title}</S.MyActivityTitle>
                  <S.MyActivityContent>{item.contents}</S.MyActivityContent>
                  <S.MyActivityCreatedAt dateTime={String(new Date(item.createdAt))}>
                    {dateFromNow(new Date(item.createdAt))}
                  </S.MyActivityCreatedAt>
                </S.MyActivityButton>
              </S.MyActivityItem>
            ))}
          {currentTab === 'Comment' &&
            userInfo?.comments?.map((item: any) => (
              <S.MyActivityItem key={item.commentId}>
                <S.MyActivityButton onClick={handleClickCard}>
                  <S.MyActivityTitle>{item.contents}</S.MyActivityTitle>
                  <S.MyActivityCreatedAt dateTime={String(new Date(item.createdAt))}>
                    {dateFromNow(new Date(item.createdAt))}
                  </S.MyActivityCreatedAt>
                </S.MyActivityButton>
              </S.MyActivityItem>
            ))}
          {currentTab === 'Scrap' &&
            userInfo?.scraps?.map((item: any) => (
              <S.MyActivityItem key={item.articleId}>
                <S.MyActivityButton onClick={handleClickCard} value={item.articleId}>
                  <S.MyActivityTitle>{item.title}</S.MyActivityTitle>
                  <S.MyActivityContent>{item.contents}</S.MyActivityContent>
                  <S.MyActivityCreatedAt dateTime={String(new Date(item.createdAt))}>
                    {dateFromNow(new Date(item.createdAt))}
                  </S.MyActivityCreatedAt>
                </S.MyActivityButton>
              </S.MyActivityItem>
            ))}
        </S.MyActivityList>
      </S.MyActivityWrapper>
    </S.MeContainer>
  );
};

export default Me;
