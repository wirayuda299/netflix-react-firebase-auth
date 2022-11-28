import { Navigate, Outlet } from 'react-router-dom';
const ProtectedMovieDetail = () => {
  const checkItems = localStorage.getItem('watchList');
  const parsedItems = JSON.parse(checkItems);
  return parsedItems.length < 1 ? <Navigate to='/watch-list' replace /> : <Outlet />;
};

export default ProtectedMovieDetail;
