import { getUserInfo } from '@api/user';
import useAuth from '@hooks/contexts/Auth/useAuth';
import UserInfoContext from '@hooks/contexts/UserInfo/userInfoContext';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

interface UserInfoProviderProps {
  children: React.ReactNode;
}

const UserInfoProvider = ({ children }: UserInfoProviderProps) => {
  const { setIsLoggedIn } = useAuth();

  const { data: userInfo } = useQuery(['userInfo'], getUserInfo, {
    onSuccess: () => {
      setIsLoggedIn(true);
    },
    onError: (err) => {
      console.log(err);
      setIsLoggedIn(false);
    },
    initialData: { nickname: '', description: '' },
  });

  const contextValue = useMemo(() => ({ userInfo }), [userInfo]);

  return <UserInfoContext.Provider value={contextValue}>{children}</UserInfoContext.Provider>;
};

export default UserInfoProvider;
