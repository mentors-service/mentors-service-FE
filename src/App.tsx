import { Article, Home, KakaoLogin, Layout, Me, Profile, Write } from '@pages';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='article' element={<Article />} />
          <Route path='me' element={<Me />} />
          <Route path='profile' element={<Profile />} />
          <Route path='write' element={<Write />} />
        </Route>

        <Route path='oauth2/kakao' element={<KakaoLogin />} />
      </Route>
    </Routes>
  );
};

export default App;
