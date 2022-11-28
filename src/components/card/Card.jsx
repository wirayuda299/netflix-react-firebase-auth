import propTypes from 'prop-types';
import { memo } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';

const Card = ({ img, title, rating, add, addToWatchList, removeWatchList,movie }) => {
  const location = useLocation();

  return (
    <div
      className={`w-full max-h-[500px] aspect-square p-5 card shadow-md rounded-md ${add || ''
        }`}>
      <img
        className='aspect-square  rounded-md w-full object-fill shadow-md'
        src={img}
        alt={title}
        width='200'
        height='150'
        loading='lazy'
      />
      <div className='p-4'>
        <div>
          <h3 className='truncate font-semibold text-gray-400'>{title}</h3>
          <p className='text-sm text-gray-500 dark:text-gray-400'>{rating}</p>
        </div>
        <div className='flex items-center justify-start space-x-3 mt-1'>

          {location.pathname === `/watch-list/${movie?.id}` ? (
            <div className='flex space-x-3 items-center'>
              <Link to='/movie-detail' className='bg-loginBtn truncate text-xs text-white py-2 px-4  mt-2 rounded-md hover:bg-loginBtnHover transition-all ease'
                onClick={removeWatchList}
                title='remove from watch list'
                name='remove from watch list'>
                Detail
              </Link>
              <div>
                <span>
                  <BsFillTrashFill size={20} />
                </span>
              </div>
            </div>
          ) : (
            <button
              className='bg-loginBtn truncate text-xs flex items-center justify-center  text-white py-2 px-2  mt-2 rounded-md hover:bg-loginBtnHover transition-all ease'
              title='add to watch list'
              name='add to watch list'
              onClick={addToWatchList}>
              Add to watch list
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
  add: propTypes.string,
};

export default memo(Card);
