import ToastContext from '@hooks/contexts/Toast/toastContext';
import { useReducer, useMemo } from 'react';
import List from './List';
import { Istate, TCase } from './type';

interface ToastProps {
  children: React.ReactNode;
}

const Toast = ({ children }: ToastProps) => {
  const [selector, toast] = useReducer((state: Istate[], action: { type: TCase; payload: Istate }) => {
    const type: Record<TCase, Istate[]> = {
      ADD: [...state, { id: Date.now() + Math.random(), ...action.payload }],
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
