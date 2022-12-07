import { IUserInfo } from '@@types/user';
import { apiInstance } from '@api/setting';

export const getUserInfo = (): Promise<IUserInfo> => apiInstance.get('users').then((res) => res.data);

export const patchUserInfo = (data: IUserInfo): Promise<IUserInfo> => apiInstance.patch('users', data);
