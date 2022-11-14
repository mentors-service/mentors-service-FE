import { UseFormRegisterReturn } from 'react-hook-form';
import * as S from './Input.style';

interface MeInputProps {
  register: UseFormRegisterReturn<'nickname' | 'description'>;
  placeholder: string;
}

const MeInput = ({ register, placeholder }: MeInputProps) => {
  return (
    <S.MyProfileInputWrapper>
      <S.MyProfileInput {...register} placeholder={placeholder} />
      <S.MyProfileInputBottom />
    </S.MyProfileInputWrapper>
  );
};

export default MeInput;
