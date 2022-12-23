import { IUserInfo } from '@@types/user';
import { apiInstance } from '@api/setting';

export const getUserInfo = (): Promise<IUserInfo> =>
  apiInstance.get('users?offset=1&searchObj&searchVal').then((res) => res.data);

export const getProfileInfo = (
  userId: string
): Promise<{ user: { id: number; nickname: string; description: string }; articles: any }> =>
  apiInstance.get(`users/${userId}?offset=1&searchObj&searchVal`).then((res) => res.data);

export const patchUserInfo = (data: IUserInfo): Promise<IUserInfo> => apiInstance.patch('users', data);
