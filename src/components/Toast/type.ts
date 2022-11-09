export interface Istate {
  id: number;
  message: string;
  type: 'SUCCESS' | 'ERROR' | 'INFO';
  time?: number;
}
