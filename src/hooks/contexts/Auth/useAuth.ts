import { useContext } from 'react';
import authContext from './authContext';

const useAuth = () => {
  const state = useContext(authContext);
  if (!state) {
    throw new Error('useDropdown must be used within a Auth');
  }

  return state;
};

export default useAuth;
