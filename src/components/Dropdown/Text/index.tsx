import useDropdown from '@hooks/contexts/useDropdown';

const Text = () => {
  const { dropdownText } = useDropdown();

  return <div>{dropdownText}</div>;
};

export default Text;
