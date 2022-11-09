import ToastContext from '@hooks/contexts/Toast/toastContext';
import { useReducer, useMemo } from 'react';
import List from './List';
import { Istate } from './type';

interface TempProps {
  children: React.ReactNode;
}

const Toast = ({ children }: TempProps) => {
  const [selector, toast] = useReducer((state: Istate[], action: { type: 'ADD' | 'DELETE'; payload: Istate }) => {
    const type: Record<'ADD' | 'DELETE', Istate[]> = {
      ADD: [...state, action.payload],
      DELETE: state.filter((item) => item.id !== action.payload.id),
    };

    return type[action.type];
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
