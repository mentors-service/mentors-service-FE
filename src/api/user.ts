import { ITemp, IuserInfo } from '@@types/user';
import { apiInstance } from './setting';

export const getUserInfo = (): Promise<IuserInfo> => apiInstance.get('profile').then((res) => res.data);

export const patchUserInfo = (data: ITemp): Promise<any> => apiInstance.patch('profile', data);
