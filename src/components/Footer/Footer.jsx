import { Link } from 'react-router-dom';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import { foorterLink } from './footerLink';
const Footer = ({ bg }) => {
  return (
    <footer className={`w-full h-full text-white p-5 ${bg}`}>
      <p className='text-center pt-6'>Questions? Call 007-803-321-2130</p>
      <div className='container flex flex-col justify-evenly mt-7 '>
        <ul className='grid grid-cols-2 mx-auto justify-center gap-x-6 gap-y-1 sm:grid-cols-3 md:grid-cols-4'>
          {foorterLink.map((item, index) => (
            <li key={index} className='text-sm'>
              <Link to={item.path} title={item?.path}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <LanguageSwitch
          className={'sm:w-40 mx-auto border truncate mt-5 py-1 rounded-sm'}
          en='en'
          id='id'
          enText='English'
          idText='Bahasa Indonesia'
        />
        <p className='text-xs'>Netflix Indonesia</p>
      </div>
    </footer>
  );
};

export default Footer;
