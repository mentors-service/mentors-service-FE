import useAuth from '@hooks/contexts/Auth/useAuth';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const KakaoLogin = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { setIsLoggedIn } = useAuth();

  const authToken = searchParams.get('token')!;

  useEffect(() => {
    if (!authToken) return;

    setIsLoggedIn(true);
    window.localStorage.setItem('token', authToken);
  }, [authToken, setIsLoggedIn]);

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
};

export default KakaoLogin;
