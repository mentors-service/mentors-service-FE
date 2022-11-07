import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import ImageUpload from '@components/ImageUpload';
import MarkdownEditor from '@components/MarkdownEditor';
import Result from '@components/Result';
import ImageDnDWrapper from '@components/ImageDnDWrapper';
import MarkdownContext from '@hooks/contexts/markdownContext';
import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createArticle } from '@api/article';
import { formErrorMessages, numberCheck } from '@utils/formUtil';
import * as S from './Write.style';
import { IFormInput } from './types';

const Write = () => {
  const [markdownText, setMarkdownText] = useState('');
  const contextValue = useMemo(() => ({ markdownText, setMarkdownText }), [markdownText]);
  const [range, setRange] = useState('');
  const navigate = useNavigate();

  const createMutaion = useMutation(createArticle, {
    onError: (error) => {},
  });

  const onClickAddButton = () => {
    createMutaion.mutate(markdownText);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRange(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.WriteWrapper>
        <input
          {...register('title', {
            required: true,
          })}
          placeholder='제목 : 멘토링 모집'
          id='title'
          style={{ border: watch('title') && '2px solid #0BBFAD', color: watch('title') && '2px solid #0BBFAD' }}
        />
        {errors?.title?.type === 'required' && <S.ErrorMessage>{formErrorMessages.NAME_REQUIRED}</S.ErrorMessage>}

        <input
          {...register('place', {
            required: true,
          })}
          placeholder='장소 : 서울, 인천'
          id='place'
          style={{ border: watch('place') && '2px solid #0BBFAD', color: watch('place') && '2px solid #0BBFAD' }}
        />
        {errors?.place?.type === 'required' && <S.ErrorMessage>{formErrorMessages.PLACE_REQUIRED}</S.ErrorMessage>}

        <input
          {...register('tag', {
            required: true,
          })}
          placeholder='태그 : Java , React'
          id='tag'
          style={{ border: watch('tag') && '2px solid #0BBFAD', color: watch('tag') && '2px solid #0BBFAD' }}
        />
        {errors?.tag?.type === 'required' && <S.ErrorMessage>{formErrorMessages.TAG_REQUIRED}</S.ErrorMessage>}

        <input
          {...register('schedule', {
            required: true,
            pattern: numberCheck,
          })}
          placeholder='일정 : 2022-01-01~2022-11-30'
          id='schedule'
          style={{ border: watch('schedule') && '2px solid #0BBFAD', color: watch('tag') && '2px solid #0BBFAD' }}
        />
        {errors?.schedule?.type === 'pattern' && <S.ErrorMessage>{formErrorMessages.SCHEDULE}</S.ErrorMessage>}
        {errors?.schedule?.type === 'required' && (
          <S.ErrorMessage>{formErrorMessages.SCHEDULE_REQUIRED}</S.ErrorMessage>
        )}

        <div>
          <label htmlFor='인원수'>
            <span> 인원수 : {range}</span>
          </label>
          <input type='range' placeholder='인원 수' min='0' max='6' step='1' value={range} onChange={handleChange} />
        </div>

        <MarkdownContext.Provider value={contextValue}>
          <ImageDnDWrapper>
            <MarkdownEditor />
          </ImageDnDWrapper>

          <ImageUpload />

          <Result />
        </MarkdownContext.Provider>

        <button type='submit' onClick={onClickAddButton}>
          글 작성하기
        </button>
      </S.WriteWrapper>
    </form>
  );
};

export default Write;
