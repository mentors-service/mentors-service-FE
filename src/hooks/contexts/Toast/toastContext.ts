import { createContext, Dispatch } from 'react';
import { Istate } from '../../../components/Toast/type';

interface defaultContext {
  toast: Dispatch<{ type: 'ADD' | 'DELETE'; payload: Istate }>;
}

export default createContext<defaultContext | null>(null);
