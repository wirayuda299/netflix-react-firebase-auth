import logo from '../../assets/img/netflix.svg';
import logoText from '../../assets/img/netflix-logo.png';
import {
  AiFillCompass,
  AiFillHeart,
} from 'react-icons/ai';
import { BiTimer } from 'react-icons/bi';
import {
  Link,
  NavLink,
  useNavigate,
} from 'react-router-dom';
import { IoPeople } from 'react-icons/io5';
import {
  BsFillGearFill,
  BsFillPersonFill,
} from 'react-icons/bs';
import { TbDoorExit } from 'react-icons/tb';
import { useAuthContext } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
  const navigate = useNavigate();
  const { logOut } = useAuthContext();
  const menuLinks = [
    {
      header: 'Menu',
      links: [
        {
          name: 'Browse',
          icon: <AiFillCompass size={25} />,
          to: '/browse',
        },
        {
          name: 'Watch list',
          icon: <AiFillHeart size={25} />,
          to: '/watch-list',
        },
        {
          name: 'Comming Soon',
          icon: <BiTimer size={25} />,
          to: '/comming-soon',
        },
      ],
    },
    {
      header: 'Social',
      links: [
        {
          name: 'Friends',
          icon: <IoPeople size={25} />,
          to: '/friends',
        },
        {
          name: 'Parties',
          icon: <BsFillPersonFill size={25} />,
          to: '/parties',
        },
      ],
    },
  ];
  function signOut() {
    try {
      logOut();
      navigate('/signin');
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('something went wrong');
    }
  }
  return (
    <nav className='w-full h-full transition-all flex flex-col '>
      <div className='w-full h-full flex flex-col p-3'>
        <div className='mb-8 mt-5 overflow-x-hidden'>
          <Link to='/'>
            <img
              src={logo}
              alt='logo'
              className='w-10 block sm:hidden'
            />
            <img
              src={logoText}
              alt='logo'
              className='hidden sm:block pl-1'
              width={120}
            />
          </Link>
        </div>
        <ul className='flex flex-col overflow-x-hidden p-2'>
          {menuLinks.map((menu, index) => (
            <li key={index}>
              <h3 className='text-xs font-normal mb-5 text-gray-400'>
                {menu.header}
              </h3>
              {menu.links.map((link, index) => (
                <NavLink
                  to={link.to}
                  key={index}
                  title={link.name}
                  className='text-gray-500 hover:text-gray-600 transition-all'
                  style={({ isActive }) => {
                    return {
                      color: isActive
                        ? 'red'
                        : '#fff',
                    };
                  }}>
                  <div className='flex space-x-3'>
                    <button className='pb-7'>
                      {link.icon}
                    </button>
                    <span className='text-sm font-normal truncate'>
                      {link.name}
                    </span>
                  </div>
                </NavLink>
              ))}
            </li>
          ))}
          <li>
            <h3 className='text-xs font-normal mb-5 text-gray-400'>
              General
            </h3>
            <div
              className='flex space-x-3 cursor-pointer text-white'
              onClick={signOut}>
              <button>
                <TbDoorExit size={25} />
              </button>
              <span className='text-sm font-normal truncate'>
                Sign out
              </span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
