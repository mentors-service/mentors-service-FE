import { Article, Home, KakaoLogin, Layout, Me, Profile, Write } from '@pages';
import { useAuth, useToast } from '@hooks/contexts';

import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

const App = () => {
  const { isLoggedIn } = useAuth();

  console.log(process.env.REACT_APP_TEST);
  return (
    <Routes>
      <Route>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='article/:id' element={<Article />} />
          <Route path='profile/:id' element={<Profile />} />

          <Route element={<RouteWithCondition isView={isLoggedIn} />}>
            <Route path='me' element={<Me />} />
            <Route path='write' element={<Write />} />
          </Route>
        </Route>

        <Route path='oauth2/kakao' element={<KakaoLogin />} />
      </Route>
    </Routes>
  );
};

interface RouteWithConditionProps {
  isView: boolean;
}

const RouteWithCondition = ({ isView }: RouteWithConditionProps) => {
  const { toast } = useToast();

  useEffect(() => {
    if (isView) return;

    toast({ type: 'ADD', payload: { message: '회원만 이용 가능합니다!', status: 'ERROR', time: 3000 } });
  }, [isView, toast]);

  if (!isView) return <Navigate to='/' />;

  return <Outlet />;
};

export default App;
