import { Navigate, Outlet } from 'react-router-dom';

const ProtectedHomePage = () => {
  const token = localStorage.getItem('token');
  return token ? <Navigate to='/browse' replace /> : <Outlet />;
};

export default ProtectedHomePage;
