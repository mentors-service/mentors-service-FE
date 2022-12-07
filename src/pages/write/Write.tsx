import MarkdownContext from '@hooks/contexts/Markdown/markdownContext';

import { WriteInput, ImageDnDWrapper, ImageUpload, MarkdownEditor, Result } from '@write/components';
import { numberCheck } from '@utils/formUtil';
import { useToast } from '@hooks/contexts';
import { TFormInput } from '@write/types';
import { createArticle } from '@api/article';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';

import * as S from './Write.style';

const Write = () => {
  const [markdownText, setMarkdownText] = useState('');

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TFormInput>();

  const { toast } = useToast();

  const sliderValue = watch('totalMember', '0');

  const { mutate: articleMutate } = useMutation(createArticle, {
    onSuccess: () => {
      toast({
        type: 'ADD',
        payload: { message: '성공적으로 게시물이 생성되었습니다.', status: 'SUCCESS', time: 3000 },
      });

      navigate('/');
    },
    onError: (err) => {
      toast({ type: 'ADD', payload: { status: 'ERROR', message: '게시물 생성 에러' } });
    },
  });

  const onSubmit: SubmitHandler<TFormInput> = (data: TFormInput) => {
    const { totalMember, schedule, ...rest } = data;
    const [startDate, endDate] = schedule.split('~');

    articleMutate({ ...rest, totalMember, startDate, endDate, contents: markdownText });
  };

  const onError = () => {
    toast({ type: 'ADD', payload: { message: '입력란을 올바르게 작성해주세요.', status: 'ERROR', time: 3000 } });
  };

  const contextValue = useMemo(() => ({ markdownText, setMarkdownText }), [markdownText]);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <S.WriteWrapper>
        <WriteInput
          register={register('title', { required: true })}
          placeholder='제목: 멘토링 모집'
          isError={Boolean(errors.title)}
        />

        <WriteInput
          register={register('place', { required: true })}
          placeholder='장소 : 서울, 인천'
          isError={Boolean(errors.place)}
        />

        <WriteInput
          register={register('tag', { required: true })}
          placeholder='태그 : Java , React'
          isError={Boolean(errors.tag)}
        />

        <WriteInput
          register={register('schedule', { required: true, pattern: numberCheck })}
          placeholder='일정 : 2022-01-01~2022-11-30'
          isError={Boolean(errors.schedule)}
        />

        <S.SliderWrapper>
          <S.SliderText>인원수: {sliderValue}</S.SliderText>

          <S.SliderBar>
            <S.SliderInput {...register('totalMember')} type='range' min={0} max={10} defaultValue={0} />
            <S.SliderStyleBar value={Number(sliderValue)} />
          </S.SliderBar>
        </S.SliderWrapper>

        <MarkdownContext.Provider value={contextValue}>
          <ImageDnDWrapper>
            <MarkdownEditor />
          </ImageDnDWrapper>

          <ImageUpload />

          <Result />
        </MarkdownContext.Provider>

        <S.SubmitButton>글 작성하기</S.SubmitButton>
      </S.WriteWrapper>
    </form>
  );
};

export default Write;
