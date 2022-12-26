import { Header } from '@components/index';

import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      {/* <footer>footer</footer> */}
    </div>
  );
};

export default Layout;
