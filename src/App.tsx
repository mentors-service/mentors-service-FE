import { Article, Home, Layout, Profile, Write } from '@pages';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='article/:id' element={<Article />} />
          <Route path='profile/:id' element={<Profile />} />
          <Route path='write' element={<Write />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
