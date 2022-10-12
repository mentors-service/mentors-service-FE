import { Article, Home, KakaoLogin, Layout, Profile, Write } from '@pages';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='article' element={<Article />} />
          <Route path='profile' element={<Profile />} />
          <Route path='write' element={<Write />} />
        </Route>

        <Route path='oauth/kakao/callback' element={<KakaoLogin />} />
      </Route>
    </Routes>
  );
};

export default App;
