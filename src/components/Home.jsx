import Navbar from './Navbar';
import Profile from './Profile';

const Home = () => {
  return (
    <>
        <div className="w-full min-h-screen overflow-hidden md:mt-0 overflow-hidden h-screen bg-[#ffd4d0] px-6 md:px-14 pt-2 md:space-y-2">
          <Navbar />
          <Profile />
      </div>
 
    </>
  )
}

export default Home
