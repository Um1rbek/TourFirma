import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6" >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Навигация</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-purple-400 active:text-purple-600 transition duration-200">Главная</a>
            </li>
            <li>
              <a href="#tours" className="hover:text-purple-400 active:text-purple-600 transition duration-200">Туры</a>
            </li>
            <li>
              <a href="#photos" className="hover:text-purple-400 active:text-purple-600 transition duration-200">Фотографии</a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-400 active:text-purple-600 transition duration-200">О нас</a>
            </li>
            <li>
              <a href="#contacts" className="hover:text-purple-400 active:text-purple-600 transition duration-200">Контакты</a>
            </li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Контакты</h3>
          <ul className="space-y-2">
            <li>
              <span className="text-gray-400">г. Москва, ул. Примерная, 123</span>
            </li>
            <li>
              <span className="text-gray-400">+7 (123) 456-78-90</span>
            </li>
            <li>
              <a href="mailto:info@tourfarm.com" className="text-gray-400 hover:text-purple-400 active:text-purple-600 transition duration-200">
                info@tourfarm.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Мы в соцсетях</h3>
          <div className="space-y-2">
            <a href="https://instagram.com" className="flex items-center text-gray-400 hover:text-purple-400 active:text-purple-600 transition duration-200">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.233.308 2.686.644.465.335.772.783.927 1.528.155.744.155 1.654.155 3.267v3.075c0 1.613 0 2.523-.155 3.267-.155.745-.462 1.193-.927 1.528-.453.335-1.32.582-2.686.644-1.266.058-1.646.07-4.85.07-3.204 0-3.584-.012-4.85-.07-1.366-.062-2.233-.308-2.686-.644-.465-.335-.772-.783-.927-1.528-.155-.744-.155-1.654-.155-3.267v-3.075c0-1.613 0-2.523.155-3.267.155-.745.462-1.193.927-1.528.453-.335 1.32-.582 2.686-.644 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.338 0-3.758.014-5.074.071-1.36.064-2.29.308-3.108.655-.818.346-1.388.796-1.982 1.39-.594.594-1.043 1.164-1.39 1.982-.347.818-.591 1.748-.655 3.108-.057 1.316-.071 1.736-.071 5.074s.014 3.758.071 5.074c.064 1.36.308 2.29.655 3.108.346.818.796 1.388 1.39 1.982.594.594 1.164 1.043 1.982 1.39.818.347 1.748.591 3.108.655 1.316.057 1.736.071 5.074.071s3.758-.014 5.074-.071c1.36-.064 2.29-.308 3.108-.655.818-.346 1.388-.796 1.982-1.39.594-.594 1.043-1.164 1.39-1.982.347-.818.591-1.748.655-3.108.057-1.316.071-1.736.071-5.074s-.014-3.758-.071-5.074c-.064-1.36-.308-2.29-.655-3.108-.346-.818-.796-1.388-1.39-1.982-.594-.594-1.164-1.043-1.982-1.39-.818-.347-1.748-.591-3.108-.655-1.316-.057-1.736-.071-5.074-.071" />
              </svg>
              Instagram
            </a>
            <a href="https://twitter.com" className="flex items-center text-gray-400 hover:text-purple-400 active:text-purple-600 transition duration-200">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.01-7.503 14.01-14.01 0-.213-.005-.426-.015-.637.958-.689 1.796-1.562 2.457-2.549" />
              </svg>
              Twitter
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Свяжитесь с нами</h3>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Оставьте сообщение"
                className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-purple-500 transition-all duration-300"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Ваше сообщение"
                className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-purple-500 transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600 active:bg-purple-700"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400 text-sm">
        <p>© 2025 Tour Farm. Все права защищены.</p>
        <p>Политика конфиденциальности | Условия использования</p>
      </div>
    </footer>
  );
};

export default Footer;