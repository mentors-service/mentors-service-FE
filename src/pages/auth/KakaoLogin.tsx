import { useSearchParams } from 'react-router-dom';

const KakaoLogin = () => {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get('code'));

  return (
    <div>
      <div>로그인 진행중..</div>
    </div>
  );
};

export default KakaoLogin;
