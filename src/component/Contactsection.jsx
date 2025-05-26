import React from 'react';

const Contactsection = () => {
  return (
    <section className="bg-gray-900 text-white py-10">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Свяжитесь с нами через Telegram
      </h1>
      <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-400 mb-2">
              Имя
            </label>
            <input
              type="text"
              id="name"
              placeholder="Введите ваше имя"
              className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-purple-500 transition-all duration-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-400 mb-2">
              Сообщение
            </label>
            <textarea
              id="message"
              placeholder="Введите ваше сообщение"
              rows="4"
              className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-purple-500 transition-all duration-300 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600 active:bg-purple-700"
          >
            Отправить сообщение
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contactsection;