import { TStatus } from 'types/common';

export type TCase = 'ADD' | 'DELETE';

export interface Istate {
  message: string;
  type: TStatus;
  id?: number;
  time?: number;
}
