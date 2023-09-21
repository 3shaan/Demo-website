import {FaBars} from "react-icons/fa"
import {HiMiniBars3CenterLeft} from "react-icons/hi2"

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex md:justify-center justify-between items-center">
        <div className="text-white md:hidden flex items-center gap-2">
          <p>Menu</p>
          <FaBars size={32}/>
        </div>
        <div className="hidden md:flex space-x-16">
          <a href="#" className="text-white">
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
          <HiMiniBars3CenterLeft size={32}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
