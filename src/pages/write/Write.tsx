import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, useWatch } from 'react-hook-form';
import ImageDnDWrapper from '@write/components/Markdown/ImageDnDWrapper';
import MarkdownContext from '@hooks/contexts/markdownContext';
import { useMemo, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createArticle } from '@api/article';
import WriteInput from '@write/components/Input';
import MarkdownEditor from '@write/components/Markdown/MarkdownEditor';
import ImageUpload from '@write/components/Markdown/ImageUpload';
import Result from '@write/components/Markdown/Result';
import { IFormInput } from './types';
import * as S from './Write.style';

const Write = () => {
  const [markdownText, setMarkdownText] = useState('');
  const navigate = useNavigate();

  const contextValue = useMemo(() => ({ markdownText, setMarkdownText }), [markdownText]);

  const createMutaion = useMutation(createArticle, {
    onError: (error) => {},
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm<IFormInput>();

  const sliderValue = useWatch({ control, name: 'slider', defaultValue: '0' });

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    // navigate('/');
    // createMutaion.mutate();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.WriteWrapper>
        <WriteInput
          register={register('title', { required: true })}
          watchText={watch('title')}
          placeholder='제목: 멘토링 모집'
          isError={Boolean(errors.title)}
        />

        <WriteInput
          register={register('place', { required: true })}
          watchText={watch('place')}
          placeholder='장소 : 서울, 인천'
          isError={Boolean(errors.place)}
        />

        <WriteInput
          register={register('tag', { required: true })}
          watchText={watch('tag')}
          placeholder='태그 : Java , React'
          isError={Boolean(errors.tag)}
        />

        <WriteInput
          register={register('schedule', { required: true })}
          watchText={watch('schedule')}
          placeholder='일정 : 2022-01-01~2022-11-30'
          isError={Boolean(errors.schedule)}
        />

        <S.SliderWrapper>
          <S.SliderText>인원수: {sliderValue}</S.SliderText>

          <S.SliderBar>
            <S.SliderInput type='range' min={0} max={10} defaultValue={0} {...register('slider')} />
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
