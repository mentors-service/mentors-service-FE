import * as S from './Input.style';

interface MeInputProps {
  placeholder: string;
}

const MeInput = ({ placeholder }: MeInputProps) => {
  return (
    <S.MyProfileInputWrapper>
      <S.MyProfileInput placeholder={placeholder} />
      <S.MyProfileInputBottom />
    </S.MyProfileInputWrapper>
  );
};

export default MeInput;
