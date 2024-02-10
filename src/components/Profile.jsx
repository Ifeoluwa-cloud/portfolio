import Button from "./features/Button"
import Imgblack from "../assets/Imgblack.png";

const Profile = () => {
  return (
    <>
        <div className='w-full mx-auto max-w-screen-2xl flex justify-between items-start leading-snug md:px-12'>
                <div className="w-1/2 text-left font-bold"> 
                  <div className="space-y-2 mb-10">  
                    <h4 className="text-black text-xl">Hi There 👋,</h4>
                    <h3 className="text-5xl">My name is<br/><span className='text-red-500 leading-normal'>Ifeoluwa Gbolahan</span></h3>
                    <h2 className="text-xl">Frontend Engineer</h2>
                    </div>
                    <div className='flex items-center justify-left gap-4 mx-auto'>
                    <Button /> <Button />
                    </div>
                </div>
                <div className="w-1/2 h-1/2 flex items-center justify-center">
                    <div className="w-96 h-96 flex items-center justify-center relative bg-red-500 rounded-full">
                        <img className='w-96 relative z-10 top-24' src={Imgblack} alt="" />
                    </div>
                </div>
        </div>
    </>
  )
}

export default Profile
