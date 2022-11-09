export interface Istate {
  id: string;
  message: string;
  type: 'SUCCESS' | 'ERROR' | 'INFO';
  time?: number;
}
