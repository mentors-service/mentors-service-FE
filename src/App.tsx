import useToast from '@hooks/contexts/Toast/useToast';
import { checkIsLoggedIn } from '@lib/protectRoute';
import { Article, Home, KakaoLogin, Layout, Me, Profile, Write } from '@pages';
import { useEffect } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

const App = () => {
  const isLoggedIn = checkIsLoggedIn();

  console.log(isLoggedIn);
  return (
    <Routes>
      <Route>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='article' element={<Article />} />
          <Route path='profile' element={<Profile />} />

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
