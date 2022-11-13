import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const KakaoLogin = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const authToken = searchParams.get('token')!;

  useEffect(() => {
    if (!authToken) return;

    window.localStorage.setItem('token', authToken);
    console.log(222);
  }, [authToken]);

  useEffect(() => {
    console.log(333);
    navigate('/');
  }, [navigate]);

  return null;
};

export default KakaoLogin;
