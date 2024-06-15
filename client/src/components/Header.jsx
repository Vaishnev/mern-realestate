import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className='bg-gradient-to-r from-light-green-300 to-light-green-500 shadow-lg'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <Link to='/'>
          <h1 className='font-extrabold text-xl sm:text-3xl text-gray-900'>
            Vaishnev<span className='text-green-700'>Estate</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-green-200 p-2 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-32 sm:w-64 text-gray-900'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='ml-2'>
            <FaSearch className='text-green-700' />
          </button>
        </form>
        <ul className='flex gap-6 items-center'>
          <Link to='/'>
            <li className='hidden sm:inline text-gray-900 hover:text-green-700 transition duration-200'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-gray-900 hover:text-green-700 transition duration-200'>
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <div className='relative group'>
                <img
                  className='rounded-full h-8 w-8 object-cover border-2 border-green-700 cursor-pointer'
                  src={currentUser.avatar}
                  alt='profile'
                />
                <div className='absolute top-10 right-0 bg-green-200 rounded-lg shadow-lg p-2 text-gray-900 hidden group-hover:block'>
                  <Link to='/profile' className='block px-4 py-2 hover:bg-green-100 rounded'>
                    Profile
                  </Link>
                  <Link to='/settings' className='block px-4 py-2 hover:bg-green-100 rounded'>
                    Settings
                  </Link>
                  <Link to='/logout' className='block px-4 py-2 hover:bg-green-100 rounded'>
                    Logout
                  </Link>
                </div>
              </div>
            ) : (
              <li className='text-gray-900 hover:text-green-700 transition duration-200'>
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
