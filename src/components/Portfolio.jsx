import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import Port1 from "../assets/Port1.svg";
import Port2 from "../assets/Port2.svg";
import Port3 from "../assets/Port3.svg";
import Port4 from "../assets/Port4.svg";
import Port5 from "../assets/Port5.svg";
import Port6 from "../assets/Port6.svg";

const projects = [
  {
    image: Port1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce web app with secure authentication, product filtering, and Stripe payments.",
    link: "https://example.com/ecommerce"
  },
  {
    image: Port2,
    title: "Job Tracker App",
    description: "A full-featured job application tracker with advanced filters, analytics, and resume management.",
    link: "https://example.com/job-tracker"
  },
  {
    image: Port3,
    title: "Crypto Dashboard",
    description: "A responsive dashboard providing real-time data visualization and price tracking for top cryptocurrencies.",
    link: "https://example.com/crypto-dashboard"
  },
  {
    image: Port4,
    title: "Portfolio Website",
    description: "A sleek personal portfolio showcasing projects, blogs, and an interactive contact form.",
    link: "https://example.com/portfolio"
  },
];


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

const Portfolio = () => {
  return (
    <motion.section
      className="w-full flex flex-col items-center bg-[#fdfdfd] py-16 px-6 md:px-28"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        className="space-y-3 text-center max-w-2xl"
        variants={textVariants}
      >
        <h2 className="text-3xl font-bold text-[#1e1e24]">Portfolio</h2>
        <p className="text-gray-600 text-base">
          Here are some selected projects that reflect my frontend development skills and design thinking.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 w-full">
        {projects.map(({ image, title, description, link }, index) => (
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
            className="relative bg-white border border-gray-200 py-6 px-6 rounded-[25px] text-center space-y-4 cursor-default"
          >
            <img
              src={image}
              alt={title}
              className="mx-auto w-full h-36 object-cover rounded-lg"
            />
            <h3 className="font-semibold text-lg text-[#1e1e24]">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

            {/* Link Icon in top-right corner */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 text-gray-900 hover:text-gray-900 transition-colors"
              aria-label={`Visit ${title} website`}
              onClick={e => e.stopPropagation()} // prevent hover scale flicker on icon click
            >
              <FiExternalLink size={22} />
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;
