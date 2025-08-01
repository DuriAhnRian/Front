import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
const Layout = () => {
  return (
    <div className="h-dvh flex flex-col">
      <Header />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
