import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from 'react';

const Header = () => {
  return (
    <div>
      <header className='bg-white shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
          <Link to="/">
            <h1 className='font-bold text-lg sm:text-2xl flex'>
              <span className="text-gray-800">Vaishnev</span>
              <span className="text-blue-600">Estate</span>
            </h1>
          </Link>
          <form className="bg-gray-100 p-2 rounded-lg flex items-center border border-gray-300">
            <input 
              type="text" 
              placeholder='Search...' 
              className='bg-transparent focus:outline-none w-24 sm:w-64 px-2 text-gray-700'
            />
            <FaSearch className="text-gray-600 ml-2"/>
          </form>
          <ul className="flex gap-4">
            <Link to="/">
              <li className="hidden sm:inline text-gray-700 hover:text-blue-600">Home</li>
            </Link>
            <Link to="/about">
              <li className="hidden sm:inline text-gray-700 hover:text-blue-600">About</li>
            </Link>
            <Link to="/sign-in">
              <li className="text-gray-700 hover:text-blue-600">Sign In</li>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;

