import propTypes from 'prop-types';
import { BsGlobe } from 'react-icons/bs';
const LanguageSwitch = ({ className, en, id, idText, enText }) => {
  return (
    <div className={className}>
      <div className='flex'>
        <div className='p-1 text-white'>
          <BsGlobe size='15' />
        </div>
        <select
          className='text-xs text-white bg-transparent w-16 sm:w-32 focus:outline-none'
          name='options'
          id='options'
          title='language'>
          <option
            className='text-xs truncate min-w-min text-slate-600 '
            value={en}>
            {idText}
          </option>
          <option className='text-xs truncate text-slate-600' value={id}>
            {enText}
          </option>
        </select>
      </div>
    </div>
  );
};

LanguageSwitch.propTypes = {
  className: propTypes.string,
  en: propTypes.string,
  id: propTypes.string,
  enText: propTypes.string,
  idText: propTypes.string,
};

export default LanguageSwitch;
