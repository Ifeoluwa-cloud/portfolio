import React, { useRef, useState, useEffect, } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // null | "success" | "error"
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000); // clear after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [status]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        'service_1wwnwov',     
        'template_krgwmly',    
        form.current,
        '0rSMI_Jhb8WOzWoGF'        
      )
      .then(
        () => {
          setStatus('success');
          setLoading(false);
          form.current.reset();
        },
        () => {
          setStatus('error');
          setLoading(false);
        }
      );
  };

  return (
    <motion.section
      className="w-full min-h-screen bg-[#FFD4D0] px-6 md:px-28 py-12 md:py-20 relative z-50 flex items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-black"
          variants={fadeInUp}
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          className="text-center text-gray-700 mb-12 max-w-xl mx-auto"
          variants={fadeInUp}
        >
          Have a project in mind, want to collaborate, or just want to say hi? Fill out the form or reach out via any of the platforms below.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 bg-white p-8 rounded-lg shadow-lg"
            variants={fadeInUp}
          >
            <motion.div variants={fadeIn}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" required className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300" />
            </motion.div>

            <motion.div variants={fadeIn}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" required className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300" />
            </motion.div>

            <motion.div variants={fadeIn}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="5" required className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"></textarea>
            </motion.div>

            <motion.button
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-2 rounded-md transition ${
                loading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-red-600'
              }`}
              whileHover={{ scale: !loading ? 1.03 : 1 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading && (
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 010 16v4l-3.5-3.5L12 20v-4a8 8 0 01-8-8z" />
                </svg>
              )}
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status === 'success' && (
              <motion.p
                className="text-green-600 mt-4 text-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                Message sent successfully! I’ll get back to you at <strong>ifeoluwagbolahan.dev@gmail.com</strong>
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                className="text-red-600 mt-4 text-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                Failed to send. Please try again later.
              </motion.p>
            )}
          </motion.form>

          {/* Contact Info */}
          <motion.div className="flex flex-col justify-between bg-white p-8 rounded-lg shadow-lg" variants={fadeInUp}>
            <div>
              <motion.h3 className="text-xl font-semibold mb-4 text-gray-800" variants={fadeIn}>
                Contact Information
              </motion.h3>
              <motion.p className="mb-4 text-gray-600" variants={fadeIn}>
                I’m a frontend engineer available for remote, hybrid, or onsite roles, and ready to build scalable, user-friendly web experiences.
              </motion.p>

              <motion.ul className="space-y-3 text-gray-700 mb-6" variants={fadeIn}>
                <li><strong>Email:</strong> gbolahanifeoluwaolaide@gmail.com</li>
                <li><strong>Location:</strong> Osogbo, Nigeria (Open to remote)</li>
              </motion.ul>

              <motion.div className="flex space-x-4" variants={fadeIn}>
                <div className="flex space-x-4 mt-6 md:mt-0">
                  <a
                    href="https://github.com/Ifeoluwa-cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-black text-xl"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://linkedin.com/in/ifeoluwagbolahan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-xl"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://x.com/ifeoluwag90"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 text-xl"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div className="mt-8" variants={fadeIn}>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.903531261884!2d4.538322414757648!3d7.771708709829201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10478f5d45678687%3A0x2de574b57891de78!2sOsogbo%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1715725401634!5m2!1sen!2sng"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
