import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const ProtectedSignUp = () => {
  const { email } = useAuthContext();
  return <>{email ? <Outlet /> : <Navigate to='/' replace />}</>;
};

export default ProtectedSignUp;
