import Navbar from './Navbar';
import Profile from './Profile';

const Home = () => {
  return (
    <>
        <div className='w-full h-full md:mt-0 overflow-hidden bg-[#ffd4d0] px-6 md:px-14 pt-5 space-y-2 md:space-y-16 md:pb-16'>
          <Navbar />
          <Profile />
      </div>
 
    </>
  )
}

export default Home
