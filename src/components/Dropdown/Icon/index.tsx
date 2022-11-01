import { KeyboardArrowDownIcon, KeyboardArrowUpIcon } from '@assets/svgs';
import useDropdown from '@hooks/contexts/useDropdown';

const Icon = () => {
  const { isOpened } = useDropdown();

  return (
    <>
      {isOpened && <KeyboardArrowUpIcon width={24} height={24} />}
      {!isOpened && <KeyboardArrowDownIcon width={24} height={24} />}
    </>
  );
};

export default Icon;
