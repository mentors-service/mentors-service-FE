import { apiInstance } from './setting';

export const postAuthCode = async (authCode: string) => {
  await apiInstance.post('/auth-code', { authCode });
};
