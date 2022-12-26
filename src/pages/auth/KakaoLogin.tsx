import { useAuth } from '@hooks/contexts';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const KakaoLogin = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { login } = useAuth();

  const authToken = searchParams.get('token')!;
  const prevPath = sessionStorage.getItem('prevPath')!;

  useEffect(() => {
    if (!authToken) return;

    login(authToken);
  }, [authToken, login]);

  useEffect(() => {
    navigate(prevPath ?? '/');
    sessionStorage.removeItem('prevPath');
  }, [navigate, prevPath]);

  return null;
};

export default KakaoLogin;
