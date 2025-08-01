import { Routes as ReactRouters, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Layout from '../layout/Layout';

const Routes = () => {
  return (
    <ReactRouters>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
      </Route>
    </ReactRouters>
  );
};

export default Routes;
