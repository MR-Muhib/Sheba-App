import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-3 z-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-white">Sheba</h1>
            <p className="mt-2 text-gray-500">
              Making the world a better place through innovative solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid   gap-2 text-center md:text-left">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <Link to="#" className="hover:text-white">
              About Us
            </Link>
            <Link to="#" className="hover:text-white">
              Services
            </Link>
            <Link to="#" className="hover:text-white">
              Contact
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link to="#" className="text-gray-500 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3c-1.1 0-2 .9-2 2v3h-3v4h3v9h4v-9h3l1-4h-4V4c0-.55.45-1 1-1h3V0z" />
              </svg>
            </Link>
            <Link to="#" className="text-gray-500 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.916 9.916 0 0 1-2.828.775A4.92 4.92 0 0 0 23.337 2c-.957.567-2.015.979-3.149 1.195A4.92 4.92 0 0 0 16.616 0c-2.724 0-4.932 2.21-4.932 4.932 0 .386.044.762.128 1.124A13.978 13.978 0 0 1 1.675 3.158a4.927 4.927 0 0 0-.667 2.48c0 1.71.87 3.217 2.191 4.099a4.92 4.92 0 0 1-2.228-.615v.062c0 2.388 1.694 4.383 3.946 4.836a4.928 4.928 0 0 1-2.224.085 4.937 4.937 0 0 0 4.6 3.417A9.867 9.867 0 0 1 0 19.539a13.924 13.924 0 0 0 7.548 2.212c9.056 0 14.009-7.498 14.009-13.985 0-.213-.005-.426-.014-.637A9.936 9.936 0 0 0 24 4.557z" />
              </svg>
            </Link>
            <Link to="#" className="text-gray-500 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c-5.514 0-10 4.486-10 10 0 4.993 3.657 9.12 8.438 9.88v-6.988h-2.54v-2.892h2.54v-2.205c0-2.507 1.493-3.89 3.775-3.89 1.09 0 2.225.195 2.225.195v2.465h-1.254c-1.235 0-1.617.766-1.617 1.548v1.887h2.755l-.44 2.892h-2.315v6.988c4.781-.76 8.438-4.887 8.438-9.88 0-5.514-4.486-10-10-10z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
