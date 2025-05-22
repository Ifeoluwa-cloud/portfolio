import { motion } from "framer-motion";
import Button from "./features/Button";
import Imgblack from "../assets/Imgblack.png";
import useMediaQuery from "../hooks/useMediaQuery";

const Profile = () => {
  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
        when: "beforeChildren",
      },
    },
  };

  const textVariants = {
    hidden: isSmallScreen
      ? { opacity: 0, y: 30 }
      : { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hidden: isSmallScreen
      ? { opacity: 0, y: 30 }
      : { opacity: 0, x: 30 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut", delay: 0.1 },
    },
  };

  return (
    <motion.div
      className="w-full h-full pt-8 md:pt-0 max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        variants={textVariants}
      >
        <div className="space-y-8">
          <motion.div variants={textVariants}>
            <h4 className="text-lg md:text-xl text-gray-700 font-semibold tracking-wide">
              Hi There 👋,
            </h4>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-balance">
              My name is <br />
              <span className="text-red-500">Ifeoluwa Gbolahan</span>
            </h1>
            <h2 className="text-lg md:text-2xl text-gray-800 font-medium tracking-wide">
              Frontend Engineer
            </h2>
          </motion.div>

          <motion.div className="mt-8" variants={textVariants}>
            <a
              href="https://drive.google.com/uc?export=download&id=1ABCxyz123456789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button content="DOWNLOAD CV" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className={`w-full md:w-1/2 flex justify-center ${
          isSmallScreen ? "overflow-hidden" : "overflow-visible"
        }`}
        variants={imageVariants}
      >
        <motion.div
          className="relative w-64 h-64 md:w-96 md:h-96 bg-red-500 rounded-full flex items-end justify-center shadow-lg overflow-hidden md:overflow-visible"
          variants={imageVariants}
        >
          <motion.img
            src={Imgblack}
            alt="Profile"
            className="w-52 md:w-80 object-cover relative top-6 md:top-24 z-10"
            variants={imageVariants}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Profile;
