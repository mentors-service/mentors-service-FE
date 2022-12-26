import { useContext } from 'react';
import dropdownContext from './dropdownContext';

const useDropdown = () => {
  const state = useContext(dropdownContext);
  if (!state) {
    throw new Error('useDropdown must be used within a Dropdown');
  }

  return state;
};

export default useDropdown;
