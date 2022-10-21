import { GroupIcon, LogoutIcon, ProfileIcon } from '@assets/svgs';
import { Outlet } from 'react-router-dom';

const KAKAO_OAUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT}&response_type=code`;

const Layout = () => {
  const handleClickLoginKakao = () => {
    window.location.href = KAKAO_OAUTH_URL;
  };

  return (
    <div>
      <header>header</header>
      <button type='button' onClick={handleClickLoginKakao}>
        카카오 로그인 버튼
      </button>

      <ProfileIcon />
      <GroupIcon />
      <LogoutIcon />
      <main>
        <Outlet />
      </main>

      <footer>footer</footer>
    </div>
  );
};

export default Layout;
