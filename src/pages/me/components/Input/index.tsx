import { UseFormRegisterReturn } from 'react-hook-form';

import * as S from './Input.style';

interface MeInputProps {
  register: UseFormRegisterReturn<'nickname' | 'description'>;
  isError: boolean;
  placeholder: string;
}

const MeInput = ({ register, placeholder, isError }: MeInputProps) => {
  return (
    <S.MyProfileInputWrapper>
      <S.MyProfileInput {...register} placeholder={placeholder} />
      <S.MyProfileInputBottom $error={isError} />
    </S.MyProfileInputWrapper>
  );
};

export default MeInput;
