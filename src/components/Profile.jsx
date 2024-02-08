import Button from "./features/Button"
import Imgblack from "../assets/Imgblack.png";
import frame1 from "../assets/frame1.png"
import frame2 from "../assets/frame2.png"
import frame3 from "../assets/frame3.png"

const Profile = () => {
  return (
    <>
        <div className='w-full mx-auto max-w-screen-2xl flex justify-between items-center leading-snug md:px-12'>
                <div className="w-1/2 text-left font-semibold"> 
                  <div className="space-y-2 mb-10">  
                    <h4 className="text-black text-xl">Hi There 👋,</h4>
                    <h3 className="text-5xl">My name is<br/><span className='text-red-500 leading-normal'>Ifeoluwa Gbolahan</span></h3>
                    <h2 className="text-xl">Frontend Engineer</h2>
                    </div>
                    <div className='flex items-center justify-left gap-4 mx-auto'>
                    <Button /> <Button />
                    </div>
                </div>
                <div className="w-1/2 h-1/2 flex items-center justify-left relative">
                    <div className='text-[29.6rem] text-[#FFEAE8] absolute text-stroke transform -translate-x-1 -right-0 -translate-y-1/2 top-96'>DV</div>
                    <p className='text-[29.6rem] text-red-500 absolute transform -translate-x-1 right-2 -translate-y-1/2 top-96'>V</p>
                    <img className='w-96 relative z-10 left-10 top-24' src={Imgblack} alt="" />
                    <img className='w-16 absolute z-1 left-3/5 top-72' src={frame2} alt="" />
                    <img className='w-28 absolute z-1 left-3/5 top-80' src={frame1} alt="" />
                    <img className='w-14 relative z-1 left-4/5 top-20' src={frame3} alt="" />
                </div>
        </div>
    </>
  )
}

export default Profile
