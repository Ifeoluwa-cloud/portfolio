import Navbar from './Navbar';
import Profile from './Profile';

const Home = () => {
  return (
    <>
        <div className='w-full bg-[#ffd4d0] px-28 py-10 space-y-32'>
          <Navbar />
          <Profile /> 
        </div>  
    </>
  )
}

export default Home
