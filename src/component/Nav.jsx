import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="pt-16 bg-gray-900 text-white z-10 py-2 w-full">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Hamburger Menu Button (Visible on small screens) */}
        <div className="flex custom:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex w-full flex-col custom:flex-row space-x-0 custom:space-x-4 md:custom:space-x-8 absolute custom:static top-12 left-0 w-full custom:w-auto bg-gray-900 custom:bg-transparent px-4 py-2 custom:p-0 ${
            isOpen ? 'flex' : 'hidden'
          } custom:flex`}
        >
          <a href="#home" className="nav-link text-base hover:text-gray-300 py-1 custom:py-0">
            Главная
          </a>
          <a href="#tours" className="nav-link text-base hover:text-gray-300 py-1 custom:py-0">
            Туры
          </a>
          <a href="#about" className="nav-link text-base hover:text-gray-300 py-1 custom:py-0">
            О нас
          </a>
          <a href="#contacts" className="nav-link text-base hover:text-gray-300 py-1 custom:py-0">
            Контакты
          </a>
        </div>

        {/* Book Button */}
        <a
          href="#book"
          className="book-btn bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-base hover:opacity-90 transition"
        >
          Забронировать
        </a>
      </div>
    </nav>
  );
};
export default Nav;