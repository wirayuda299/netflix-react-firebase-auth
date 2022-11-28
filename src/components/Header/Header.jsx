import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/img/netflix-logo.png';
import propTypes from 'prop-types';

const Header = ({ children, add }) => {
  const location = useLocation();
  const homePage = location.pathname === '/';
  const signinPage = location.pathname === '/signin';
  const signup = location.pathname === '/signup';

  return (
    <header className={`w-full ${add}`}>
      <div className='w-full flex justify-between items-center h-20 pl-7'>
        <div
          className={homePage  || signinPage || signup ? 'block' : 'hidden'}>
          <Link to='/'>
            <img
              className='w-32'
              src={logo}
              alt='netflix'
              width='150'
              height='150'
            />
          </Link>
        </div>
        {children}
      </div>
    </header>
  );
};

Header.propTypes = {
  children: propTypes.node,
  add: propTypes.string,
};

export default Header;
