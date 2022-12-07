import UserInfoContext from '@hooks/contexts/UserInfo/userInfoContext';

import { getUserInfo } from '@api/user';
import { useAuth } from '@hooks/contexts';

import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

interface UserInfoProviderProps {
  children: React.ReactNode;
}

const UserInfoProvider = ({ children }: UserInfoProviderProps) => {
  const { logout } = useAuth();

  const { data: userInfo } = useQuery(['userInfo'], getUserInfo, {
    onError: () => {
      logout();
    },
    initialData: { nickname: '', description: '', article: [] },
    retry: false,
  });

  const contextValue = useMemo(() => ({ userInfo }), [userInfo]);

  return <UserInfoContext.Provider value={contextValue}>{children}</UserInfoContext.Provider>;
};

export default UserInfoProvider;
