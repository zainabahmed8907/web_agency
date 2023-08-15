import { useState } from "react";
import Logo from "../assets/img/boldo_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between bg-[#E47500] p-2 shadow-lg ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center flex-shrink-0 text-white">
          <img src={Logo} alt="logo" className=" object-cover" />
        </div>
        <button
          className="lg:hidden flex items-center text-black"
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-6 w-6"
            fill="white"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {/* Navbar links (hidden on smaller screens) */}
        <div
          className={`hidden lg:flex space-x-4 ${
            isMobileMenuOpen ? "hidden" : "block"
          }`}
        >
          <div className="lg:text-sm space-x-20 mt-4 lg:mt-0 lg:ml-auto  ">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white
            	hover:text-[#f5cca1]  transition-colors duration-400 ease-in-out
             amber-500
              "
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="block mt-4 lg:inline-block lg:mt-0 text-white
            	hover:text-[#f5cca1]  transition-colors duration-400 ease-in-out
              
              "
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="block mt-4 lg:inline-block lg:mt-0 text-white	hover:text-[#f5cca1]
             transition-colors duration-400 ease-in-out  pr-4 
             "
            >
              Services
            </Link>
            <Link
              to="/news"
              className="block mt-4 lg:inline-block lg:mt-0 text-white	hover:text-[#f5cca1]
             transition-colors duration-400 ease-in-out  pr-4 
             "
            >
              News
            </Link>

            <Link
              to="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white	hover:text-[#f5cca1]
             transition-colors duration-400 ease-in-out w-30 bg-white px-3 py-2 rounded 
             text-orange-200
             "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Responsive menu (shown on smaller screens) */}
      <div
        className={`lg:hidden transition-all duration-200 ${
          isMobileMenuOpen ? "h-0 opacity-0" : "h-auto opacity-100"
        } `}
      >
        <div className="bg-white-600 p-4">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white
            	hover:text-[#f5cca1]  transition-colors duration-400 ease-in-out
             amber-500
              "
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="block mt-4 lg:inline-block lg:mt-0 text-white
            	hover:text-[#f5cca1]  transition-colors duration-400 ease-in-out
              
              "
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="block mt-4 lg:inline-block lg:mt-0 text-white	hover:text-[#f5cca1]
             transition-colors duration-400 ease-in-out  pr-4 
             "
          >
            Services
          </Link>
          <Link
            to="/news"
            className="block mt-4 lg:inline-block lg:mt-0 text-white	hover:text-[#f5cca1]
             transition-colors duration-400 ease-in-out  pr-4 
             "
          >
            News
          </Link>

          <Link
            to="/contact-us"
            className="block mt-4 lg:inline-block lg:mt-0 text-white	hover:text-[#f5cca1]
             transition-colors duration-400 ease-in-out w-30 bg-white px-3 py-2 rounded   
             text-orange-200


             "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
