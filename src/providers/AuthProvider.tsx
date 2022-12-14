import AuthContext from '@hooks/contexts/Auth/authContext';

import { useState, useMemo } from 'react';

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const login = (token: string) => {
    setIsLoggedIn(true);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  };

  const contextValue = useMemo(() => ({ isLoggedIn, setIsLoggedIn, login, logout }), [isLoggedIn]);

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
