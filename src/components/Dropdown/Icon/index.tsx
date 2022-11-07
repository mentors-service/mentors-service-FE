import useDropdown from '@hooks/contexts/useDropdown';
import * as S from './Icon.style';

const Icon = () => {
  const { isOpened } = useDropdown();

  return <S.KeyboardArrowDownIcon $toggle={isOpened} />;
};

export default Icon;
