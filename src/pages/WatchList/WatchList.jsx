import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import toast from 'react-hot-toast';
import { Link, Outlet } from 'react-router-dom';
import Card from '../../components/card/Card';

const WatchList = () => {
  const [watchListItems, setWatchListItems] =useState([]);

  useEffect(() => {
    try {
      function getListedItems() {
        if (getWatchList) {
          return setWatchListItems(
            JSON.parse(getWatchList),
          );
        }
      }
      getListedItems();
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  const getWatchList =localStorage.getItem('watchList');
  function removeWatchList(movie) {
    try {
      const current = JSON.parse(getWatchList);
      const filtered = current.filter(
        (item) => item.id !== movie?.id,
      );
      localStorage.setItem(
        'watchList',
        JSON.stringify(filtered),
      );
      setWatchListItems(filtered);
      toast.success(`${movie?.title || movie?.name || movie.original_name} removed from watch list`);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div
      className='w-full h-full'
      style={{ background: '#0b0b0e' }}>
      <div className='w-full '>
        <h1 className='text-2xl font-bold py-8 px-5 text-center'>
          Your watch list
        </h1>
      </div>
      {watchListItems.length < 1 && (
        <div className='flex w-full justify-center h-full'>
          <h1 className='text-2xl font-bold text-white pb-3'>
            Your Watch List is Empty
          </h1>
        </div>
      )}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center p-5'>

        {watchListItems.map((movie) => (
          <Card
            add='bg-[#1c1e27] transition-all ease duration-500 backdrop-filter backdrop-blur-sm bg-opacity-10 hover:bg-opacity-20'
            key={movie?.id}
            title={
              movie?.title ??
              movie?.name ??
              movie?.original_name
            }
            img={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            rating={movie?.vote_average}
            removeWatchList={() =>
              removeWatchList(movie)
            }
            movie={ movie}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default WatchList;
