import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center justify-between mx-10 md:mx-20 pt-5">
      <h3 className="text-2xl font-bold">Ramjan Sarkar</h3>
      <button onClick={toggleMenu} className="md:hidden">
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      <ul
        className={`fixed top-0 right-0 h-full w-2/4 text-center bg-fuchsia-950 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:flex md:items-center md:justify-between md:w-auto md:bg-transparent md:shadow-none md:transform-none list-none gap-14 text-xl`}
      >
        <li className="md:hidden absolute top-5 right-5">
          <button onClick={toggleMenu}>
            <FiX size={24} />
          </button>
        </li>
        <li className="mt-20 md:mt-0"><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button
        type="button"
        className="hidden md:block bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500 py-2 px-4 rounded-full transform transition-transform duration-[1500ms] hover:scale-150"
      >
        Connect With Me
      </button>
    </div>
  );
};

export default NavBar;
