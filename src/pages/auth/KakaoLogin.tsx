import { postAuthCode } from '@api/auth';
import { useMutation } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

const KakaoLogin = () => {
  const [searchParams] = useSearchParams();
  const authCode = searchParams.get('code');
  const authCodeMutation = useMutation((code: string) => postAuthCode(code));

  return (
    <div>
      <div>로그인 진행중..</div>
    </div>
  );
};

export default KakaoLogin;
