import Banner from '../../components/Banner/Banner';
import FAQ from '../../components/FAQ/FAQ';
import KidsValue from '../../components/KidsValue/KidsValue';
import OurStory from '../../components/OurStory/OurStory';
import WatchOnDevice from '../../components/WatchOnDevice/WatchOnDevice';
import WatchOnTv from '../../components/WatchOnTv/WatchOnTv';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    <>
      <section>
        <Banner />
        <hr className='bg-slate-600 py-1' />
      </section>
      <section>
        <WatchOnTv />
        <hr className='bg-slate-600 py-1' />
      </section>
      <section>
        <OurStory />
        <hr className='bg-slate-600 py-1' />
      </section>
      <section>
        <WatchOnDevice />
        <hr className='bg-slate-600 py-1' />
      </section>
      <section>
        <KidsValue />
        <hr className='bg-slate-600 py-1' />
      </section>
      <section>
        <FAQ />
        <hr className='bg-slate-600 py-1' />
      </section>
      <section>
        <Footer bg='bg-black' />
      </section>
    </>
  );
};

export default Home;
