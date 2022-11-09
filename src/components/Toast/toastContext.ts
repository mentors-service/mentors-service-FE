import { createContext, Dispatch } from 'react';
import { Istate } from './type';

interface defaultContext {
  selector: Istate[];
  toast: Dispatch<{ type: 'ADD' | 'DELETE'; payload: Istate }>;
}

export default createContext<defaultContext | null>(null);
