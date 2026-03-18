import Spline from '@splinetool/react-spline';
import Socials from './Socials';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-12 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0">
        
        {/* LEFT: Logo + Text + Socials */}
        <div className="w-full md:w-[26%] flex flex-col gap-4 items-start">
          <h2 className="text-2xl font-bold -ml-2"><span className="flex justify-center items-center cursor-pointer hover:scale-105  duration-300 transition-all ease-out main-head"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e3e3e3"><path d="M200-200v-80h560v80H200Zm14-160 266-400 266 400H214Zm266-80Zm-118 0h236L480-616 362-440Z"/></svg> VORXEN</span></h2>
          <p className="text-sm text-gray-300">
            Advanced AI and robotics experiences that anticipate, adapt, and evolve.
          </p>
          <span className='-ml-1 mt-2'>
            <Socials />
          </span>
        </div>

        {/* CENTER: Spline */}
        <div className="w-full md:w-[58%] h-48 md:h-100 relative">
          <Spline scene="https://prod.spline.design/p5Z-jq1vxUDynMTH/scene.splinecode" />
          <div className="absolute bottom-5 right-3 w-[150px] h-[50px] bg-black"></div>
        </div>

        {/* RIGHT: Links + Credit */}
        <div className="w-full md:w-[26%] flex flex-col gap-4 items-start pl-8 md:pl-12">
        <h3 className="font-semibold text-lg">Links</h3>
        <ul className="flex flex-col gap-2 text-gray-300">
            <li><a href="#" className="hover:text-white hover:pl-2 transition-all ease-out duration:100">Neural Core</a></li>
            <li><a href="#" className="hover:text-white transition-all ease-out duration:100 hover:pl-2">Synth Systems</a></li>
            <li><a href="#" className="hover:text-white transition-all ease-out duration:100 hover:pl-2">Cyber Interface</a></li>
            <li><a href="#" className="hover:text-white transition-all ease-out duration:100 hover:pl-2">AI Nexus</a></li>
        </ul>
        <p className="text-xs text-gray-500 mt-4">
            Designed & Made By <span className='hover:pl-2 duration-300 transition-all ease-out '>Rizwan Waseem</span>
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;