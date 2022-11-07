import { InputKeys } from '@write/types';
import { UseFormRegisterReturn } from 'react-hook-form';
import * as S from './Input.style';

interface WriteInputProps {
  register: UseFormRegisterReturn<InputKeys>;
  watchText: string;
  placeholder: string;
  isError: boolean;
}

const WriteInput = ({ register, watchText, placeholder, isError }: WriteInputProps) => {
  return <S.WriteInput {...register} text={watchText} error={isError} placeholder={placeholder} />;
};

export default WriteInput;
