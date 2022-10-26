import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = (redirectUrl = '/') => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      setAuthToken(window.localStorage.getItem('token'));
      return;
    }

    navigate(redirectUrl);
  }, [navigate, redirectUrl]);

  return authToken;
};

export default useAuth;
