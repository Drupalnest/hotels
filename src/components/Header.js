import React from "react";
import { Link } from "gatsby"; // You can use the appropriate routing library

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <Link to="/" className="text-white font-semibold text-lg">
         
        </Link>

        {/* Navbar Links */}
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to="/services" className="text-white hover:text-gray-300">
            Services
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
