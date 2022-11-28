import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
const Layout = () => {
  return (
    <div className='w-full bg-black h-full flex  overflow-x-hidden'>
      <aside className='flex h-screen flex-col shrink-0 overflow-x-hidden border-r border-slate-600 transition-all ease duration-500 w-[77px] sm:w-[230px] '>
        <Navbar />
      </aside>
      <main
        className='w-full h-screen overflow-y-auto flex flex-col transition-all'
        style={{ background: '#0b0b0e' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
