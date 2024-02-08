import Navbar from './Navbar';
import Profile from './Profile';

const Home = () => {
  return (
    <>
        <div className='w-full bg-[#ffd4d0] p-8'>
          <Navbar />
          <Profile /> 
        </div>  
    </>
    
  )
}

export default Home
