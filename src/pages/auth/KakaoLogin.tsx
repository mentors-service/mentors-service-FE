import useAuth from '@hooks/contexts/Auth/useAuth';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

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
