import useDropdown from '@hooks/contexts/useDropdown';
import * as S from './Text.style';

const Text = () => {
  const { dropdownText } = useDropdown();

  return <S.Text>{dropdownText}</S.Text>;
};

export default Text;
