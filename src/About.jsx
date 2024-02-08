import html from './assets/html.svg';
import css from './assets/css.svg';
import js from './assets/js.svg';
import reactLogo from './assets/reactLogo.svg';
import tailwind from './assets/tailwind.svg';
import git from './assets/git.svg';
import github from './assets/github.svg';
import vscode from './assets/vscode.svg';
import Imgblack2 from './assets/Imgblack2.png';

const About = () => {
  return (
    <div className="w-full flex justify-center items-center relative p-6 pl-0 mx-auto z-40 bg-[#1e1e24]">
        <div className="text-[#fafafa]">
          <div className='flex justify-around items-center gap-2'>
            <div className='w-1/4 relative'>
                <div className='relative w-full h-80 mt-10 pt-2 bg-[#fafafa] rounded-r-full overflow-hidden'>
                    <img className='w-full object-cover' src={Imgblack2} alt="" />
                </div>
            </div>
            
            <div className='w-3/4'>
              <h3 className="text-4xl font-bold mb-8 flex justify-center align-top">About Me</h3>
              <p className="w-full px-20 text-base mx-auto leading-relaxed text-justify ">I'm Ifeoluwa Gbolahan, a seasoned Frontend Engineer dedicated to crafting immersive digital experiences. 
                  With over three years of hands-on experience, I specialize in transforming UI/UX designs into responsive and user-friendly applications.
                  My approach to development is driven by a commitment to excellence and a relentless pursuit of innovation. I thrive in collaborative environments, excelling in Agile methodologies and 
                  version control with Git. Let's connect and explore how we can elevate your projects together.
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center mt-1'>
              <div className='w-4/5 grid grid-cols-4 gap-6 my-10 justify-items-center items-center'>
                <img className='w-16' src={html} alt="" />
                <img className='w-16' src={css} alt="" />
                <img className='w-16' src={tailwind} alt="" />
                <img className='w-16' src={js} alt="" />
                <img className='w-16' src={reactLogo} alt="" />
                <img className='w-16' src={git} alt="" />
                <img className='w-16 ' src={github} alt="" />
                <img className='w-16' src={vscode} alt="" />
              </div>
          </div>
        </div>
    </div>
  )
}

export default About;