import { TInputKeys } from '@write/types';
import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import * as S from './Input.style';

interface WriteInputProps {
  register: UseFormRegisterReturn<TInputKeys>;
  placeholder: string;
  isError: boolean;
}

const WriteInput = ({ register, placeholder, isError }: WriteInputProps) => {
  const [toggle, setToggle] = useState(false);

  const handleSelect = () => {
    setToggle(true);
  };
  const handleBlur = () => {
    setToggle(false);
  };

  return (
    <S.WriteInput
      {...register}
      onSelect={handleSelect}
      onBlur={handleBlur}
      text={toggle}
      error={isError}
      placeholder={placeholder}
    />
  );
};

export default WriteInput;
