import { motion } from "framer-motion";
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
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut"
      }
    },
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, type: "spring", stiffness: 120 },
    },
  };

  return (
    <motion.div
      className="w-full min-h-screen bg-[#1e1e24] py-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="w-full flex flex-col md:flex-row justify-center items-center relative px-6 md:px-28 pb-4">
        {/* Image */}
        <motion.div
          className="hidden md:flex w-full md:w-1/3 justify-center mb-8 md:mb-0"
          variants={sectionVariants}
        >
          <div className="w-60 h-80 bg-white rounded-r-full overflow-hidden">
            <img
              className="w-full h-full pt-2 object-cover object-top md:object-[0_15%]"
              src={Imgblack2}
              alt="profile"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full md:w-2/3 px-4 md:px-10 text-white"
          variants={sectionVariants}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
            About Me
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-justify">
            I&apos;m Ifeoluwa Gbolahan, a passionate and detail-oriented Frontend Developer currently working with Brytahub, where I craft responsive, high-performance web interfaces that elevate user experiences.
            <br /><br />
            With hands-on experience in HTML, CSS, JavaScript (ES6+), React, Tailwind CSS, Git, GitHub, and VS Code, I specialize in building clean, scalable, and maintainable codebases. I’m a strong advocate for mobile-first design and accessibility, ensuring every project works flawlessly across all devices.
            <br /><br />
            I&apos;m actively seeking frontend development roles where I can contribute to impactful products, collaborate with inspiring teams, and continue sharpening my skills in modern frameworks and tools.
            <br /><br />
            Outside of tech, I&apos;m a football enthusiast and a loyal Chelsea FC supporter. Whether it’s coding a new feature or watching match highlights, I bring the same energy and focus to everything I do.
            <br /><br />
            Let’s build something amazing together!
          </p>
        </motion.div>
      </div>

      {/* Icons */}
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 gap-6 px-6 md:px-28 pt-10 justify-items-center"
        variants={containerVariants}
      >
        {[html, css, tailwind, js, reactLogo, git, github, vscode].map((icon, index) => (
          <motion.img
            key={index}
            src={icon}
            alt={`tech-${index}`}
            className="w-12 md:w-16"
            variants={iconVariants}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
