import { useState } from "react";
import Button from "./features/Button";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ content }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  let Links = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Service', link: '#service' },
    { name: 'Portfolio', link: '#portfolio' },
  ];
  

  return (
    <>
      <nav className="px-4 pt-4 md:px-14 pt-8 max-w-screen-2xl mx-auto text-primary relative">
        <div className="flex justify-between items-center text-lg font-semibold py-4">
          {/* Logo */}
          <div className="font-extrabold text-xl">
            GIO<span className="text-red-500">Code</span>
          </div>

          {/* Hamburger menu icon on mobile */}
          <div className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Desktop Links + Button */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-10">
                {Links.map(({ name, link }) => (
                  <li key={name} className="hover:text-red-600">
                    <a href={link}>{name}</a>
                  </li>
                ))}
            </ul>
            <a href="#contact">
              <Button content="Contact" />
            </a>
          </div>
        </div>

        {/* Mobile menu - visible only when menuOpen is true */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-start gap-6 pb-6">
            <ul className="flex flex-col gap-4 w-full">
              {Links.map(({ name, link }) => (
                <li key={name} className="hover:text-red-600 border-b pb-2 w-full">
                  <a href={link} onClick={() => setMenuOpen(false)}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <Button content="Call Now" />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
