import ToastContext from '@hooks/contexts/Toast/toastContext';
import Toast from '@components/Toast';

import { Istate, TCase } from '@components/Toast/type';

import { useReducer, useMemo } from 'react';

interface ToastProviderProps {
  children: React.ReactNode;
}

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [selector, dispatch] = useReducer((state: Istate[], action: { type: TCase; payload: Istate }) => {
    const type: Record<TCase, Istate[]> = {
      ADD: [...state, { id: Date.now() + Math.random(), ...action.payload }],
      DELETE: state.filter((item) => item.id !== action.payload.id),
    };

    return type[action.type];
  }, []);

  const contextValue = useMemo(() => ({ toast: dispatch }), []);

  return (
    <ToastContext.Provider value={contextValue}>
      <Toast list={selector} />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
