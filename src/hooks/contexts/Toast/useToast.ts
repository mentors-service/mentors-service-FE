import { useContext } from 'react';
import toastContext from './toastContext';

const useToast = () => {
  const state = useContext(toastContext);
  if (!state) {
    throw new Error('useToast must be used within a Toast');
  }

  return state;
};

export default useToast;
