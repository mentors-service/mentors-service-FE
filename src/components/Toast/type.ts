import { TStatus } from '@@types/common';

export type TCase = 'ADD' | 'DELETE';

export interface Istate {
  message: string;
  status: TStatus;
  id?: number;
  time?: number;
}
