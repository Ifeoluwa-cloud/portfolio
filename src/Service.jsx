import { motion } from "framer-motion";
import Design1 from "../src/assets/Design1.svg";
import Design2 from "../src/assets/Design2.svg";
import Design3 from "../src/assets/Design3.svg";
import Design4 from "../src/assets/Design4.svg";

const services = [
  {
    icon: Design1,
    title: "UI/UX Design",
    description: "Creating intuitive and visually compelling user interfaces with a focus on usability and seamless experiences.",
  },
  {
    icon: Design2,
    title: "Responsive Web Development",
    description: "Building responsive websites that look and perform beautifully across all devices and screen sizes.",
  },
  {
    icon: Design3,
    title: "Component-based Architecture",
    description: "Developing scalable and reusable components using React and modern frontend architecture patterns.",
  },
  {
    icon: Design4,
    title: "Website Optimization",
    description: "Enhancing website speed, performance, and SEO with best practices and performance-first design.",
  },
];

// Animation for entrance on scroll
const textVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const Service = () => {
  return (
    <motion.section
      className="w-full min-h-screen flex flex-col items-center bg-white py-16 px-6 md:px-28 flex items-center justify-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        className="space-y-3 text-center max-w-2xl"
        variants={textVariants}
      >
        <h2 className="text-3xl font-bold text-[#1e1e24]">My Services</h2>
        <p className="text-gray-600 text-base">
          I provide modern frontend development services tailored to business goals and user needs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 w-full">
        {services.map(({ icon, title, description }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
              backgroundColor: "#f9f9f9",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            className="bg-white border border-gray-200 py-6 px-6 rounded-[25px] text-center space-y-4 transition-all"
          >
            <img src={icon} alt={title} className="mx-auto w-14 h-14 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-semibold text-lg text-[#1e1e24]">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Service;
