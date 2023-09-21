import { useState } from "react";
import {FaBars} from "react-icons/fa"
import {HiMiniBars3CenterLeft} from "react-icons/hi2"
import {RxCross1} from 'react-icons/rx';
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
   <>
    <nav className="bg-[#0C0C0C] p-4">
      <div className="flex md:justify-center justify-between items-center">
        <div className="text-white md:hidden flex items-center gap-2">
          <p>Menu</p>
          <button onClick={()=>setIsNavbarOpen(!isNavbarOpen)}>
          <FaBars size={32}/>
          </button>
          
        </div>
        <div className="hidden md:flex space-x-16">
          <a href="#" className="text-blue-900">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Blog
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div>
        <div className="text-white md:hidden flex items-center gap-2">
          <p>Sidebar</p>
          <button onClick={()=>setIsSideBarOpen(!isSideBarOpen)}>
          <HiMiniBars3CenterLeft size={32}/>
          </button>
          
        </div>
      </div>
    </nav>
    {
      isNavbarOpen && <aside>
      <div className="fixed top-0 right-0 w-64 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full bg-[#ADADAD]">
        <button onClick={()=>setIsNavbarOpen(false)} className="p-4 text-white right-0 absolute">
          <RxCross1 size={32}/>
        </button>
        <div className="flex flex-col items-center  space-y-16 pt-24">
          <a href="#" className="text-blue-900">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Blog
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div>
      </div>
    </aside>
    }
    {
      isSideBarOpen && <aside>
      <div className="fixed top-0 left-0 w-64 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full bg-[#9398BF]">
        <button onClick={()=>setIsSideBarOpen(false)} className="p-4 text-white right-0 absolute">
          <RxCross1 size={32}/>
        </button>
        <div>
          <Sidebar/>
        </div>
      </div>
    </aside>
    }
    
   </>
  );
};

export default Navbar;
