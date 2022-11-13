import Header from '@components/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const handleClickLoginKakao = () => {
    window.location.href = process.env.REACT_APP_KAKAO_OAUTH_URL!;
  };

  const handleTestLogin = () => {
    window.localStorage.setItem('token', 'test');
  };

  const handleTestLogout = () => {
    window.localStorage.removeItem('token');
  };

  return (
    <div>
      <header>header</header>
      <button type='button' onClick={handleClickLoginKakao}>
        카카오 로그인 버튼
      </button>

      <button type='button' onClick={handleTestLogin}>
        로컬 스토리지 저장
      </button>

      <button type='button' onClick={handleTestLogout}>
        로컬 스토리지 제거
      </button>

      <Header />

      <main>
        <Outlet />
      </main>

      {/* <footer>footer</footer> */}
    </div>
  );
};

export default Layout;
