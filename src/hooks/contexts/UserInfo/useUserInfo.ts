import { useContext } from 'react';
import userInfoContext from './userInfoContext';

const useUserInfo = () => {
  const state = useContext(userInfoContext);
  if (!state) {
    throw new Error('useUserInfo must be used within a UserInfo');
  }

  return state;
};

export default useUserInfo;
