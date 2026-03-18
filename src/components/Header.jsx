import { useEffect, useState } from "react";
import TransitionLink from "./TransitionLink";
import SoundPlayer from './SoundPlayer';
import gsap from 'gsap';

const Header = () => {
const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
  gsap.fromTo(
    ".appear-animation",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 4, // ⬅️ appears after 4 seconds
      ease: "power2.out"
    }
  );
}, []);

  return (
    <header className="appear-animation w-full px-4 sm:px-6 md:px-3 lg:px-8 py-4 bg-transparent absolute flex justify-center items-center luna z-2">
      

        {/* Logo */}
        <h1 className="logo main-head text-lg sm:text-xl font-normal cursor-pointer ml-2">
          <span className="flex justify-center items-center cursor-pointer hover:scale-105  duration-300 transition-all ease-out"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e3e3e3"><path d="M200-200v-80h560v80H200Zm14-160 266-400 266 400H214Zm266-80Zm-118 0h236L480-616 362-440Z"/></svg> VORXEN</span>
        </h1>
        <div className="w-[75%] flex justify-center items-center px-18"><span className="h-[1px] w-full bg-white block"></span></div>
        {/* Desktop Nav */}
        <div className="hidden md:flex navLinks gap-10 text-lg lg:text-[16px] mr-5 items-center font-semibold">
            <span className="hover:translate-y-1 duration-300 transition-all ease-out underline-animation">
                <TransitionLink to="/">Home</TransitionLink>
            </span>

            <span className="hover:translate-y-1 duration-300 transition-all ease-out underline-animation">
                <TransitionLink to="/page2">About</TransitionLink>
            </span>
            <SoundPlayer />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 w-[90%] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl flex flex-col items-center gap-6 py-6 md:hidden">
          <span className="hover:translate-y-1 duration-300 transition-all ease-out">
                <TransitionLink to="/">Home</TransitionLink>
            </span>

            <span className="hover:translate-y-1 duration-300 transition-all ease-out">
                <TransitionLink to="/page2">About</TransitionLink>
            </span>
            <SoundPlayer />
        </div>
      )}
    </header>
  );
};

export default Header;