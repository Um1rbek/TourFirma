import React from 'react';

const Topnav = () => {
  return (
<nav className="fixed top-0 bg-gray-900 text-white z-10 py-2 w-full">
  <div data-aos="fade-up" className="container mx-auto flex justify-between items-center px-4">
    <div className="text-xl font-bold">Tour Farm</div>
    <div className="hidden md:flex space-x-6">
      <a href="#contacts" className="hover:text-gray-300">Контакты</a>
      <a href="https://instagram.com" className="hover:text-gray-300">Instagram</a>
      <a href="https://facebook.com" className="hover:text-gray-300">Facebook</a>
      <a href="#ru" className="hover:text-gray-300">RU</a>
    </div>
  </div>
</nav>
  );
};

export default Topnav;