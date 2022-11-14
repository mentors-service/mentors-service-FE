import { apiInstance } from './setting';

export const getUserInfo = (): Promise<{ nickname: string; description: string }> =>
  apiInstance.get('profile').then((res) => res.data);
