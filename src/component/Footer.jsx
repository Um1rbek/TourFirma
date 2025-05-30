import React from 'react';

const Footer = () => {
  return (
<header className="bg-gray-900 text-white h-[180px] w-full">
  <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
    <h1 className="text-2xl font-bold">Tour Farm</h1>

    {/* Hamburger tugmasi (mobilda) */}
    <button
      className="md:hidden block focus:outline-none"
      onClick={() => {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
      }}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    {/* Navbar (desktopda) */}
    <nav className="hidden md:flex space-x-6">
      <a href="#home" className="hover:text-purple-400 transition">Главная</a>
      <a href="#tours" className="hover:text-purple-400 transition">Туры</a>
      <a href="#photos" className="hover:text-purple-400 transition">Фотографии</a>
      <a href="#about" className="hover:text-purple-400 transition">О нас</a>
      <a href="#contacts" className="hover:text-purple-400 transition">Контакты</a>
    </nav>
  </div>

  {/* Navbar (mobilda) */}
  <div id="mobile-menu" className="md:hidden hidden px-4 pb-4 space-y-2">
    <a href="#home" className="block hover:text-purple-400 transition">Главная</a>
    <a href="#tours" className="block hover:text-purple-400 transition">Туры</a>
    <a href="#photos" className="block hover:text-purple-400 transition">Фотографии</a>
    <a href="#about" className="block hover:text-purple-400 transition">О нас</a>
    <a href="#contacts" className="block hover:text-purple-400 transition">Контакты</a>
  </div>
</header>

  );
};

export default Footer;