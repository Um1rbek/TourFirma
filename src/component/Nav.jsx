import React from 'react';

const Nav = () => {

  return (
     <nav className="bg-gray-900 text-white  w-full z-10 py-2">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex space-x-4 md:space-x-8">
          <a href="#home" className="nav-link text-base">Главная</a>
          <a href="#tours" className="nav-link text-base">Туры</a>
          <a href="#about" className="nav-link text-base">О нас</a>
          <a href="#contacts" className="nav-link text-base">Контакты</a>
        </div>
        <a
          href="#book"
          className="book-btn bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-base"
        >
          Забронировать
        </a>
      </div>
    </nav>
  );
};
export default Nav;