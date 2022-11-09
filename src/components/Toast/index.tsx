import ToastContext from '@hooks/contexts/Toast/toastContext';
import { useReducer, useMemo } from 'react';
import List from './List';
import { Istate } from './type';

interface TempProps {
  children: React.ReactNode;
}

const Toast = ({ children }: TempProps) => {
  const [selector, toast] = useReducer((state: Istate[], action: { type: 'ADD' | 'DELETE'; payload: Istate }) => {
    switch (action.type) {
      case 'ADD':
        return [...state, action.payload];
      case 'DELETE':
        return state.filter((item) => item.id !== action.payload.id);
      default:
        return state;
    }
  }, []);

  const contextValue = useMemo(() => ({ selector, toast }), [selector]);

  return (
    <ToastContext.Provider value={contextValue}>
      <Toast.List />
      {children}
    </ToastContext.Provider>
  );
};

Toast.List = List;

export default Toast;
