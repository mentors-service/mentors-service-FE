import { postAuthCode } from '@api/auth';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const KakaoLogin = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  // const authCodeMutation = useMutation((code: string) => postAuthCode(code));

  useEffect(() => {
    const authToken = searchParams.get('token')!;
    window.localStorage.setItem('token', authToken);

    navigate('/');
  }, [searchParams, navigate]);

  return (
    <div>
      <div>로그인 진행중..</div>
    </div>
  );
};

export default KakaoLogin;
