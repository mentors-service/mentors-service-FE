import useDropdown from '@hooks/contexts/useDropdown';
import * as S from './Button.style';

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  const { handleClickDropdown } = useDropdown();

  return <S.Button onClick={handleClickDropdown}>{children}</S.Button>;
};

export default Button;
