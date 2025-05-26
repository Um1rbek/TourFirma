import React, { useState } from 'react';

const faqs = [
  {
    question: 'Как забронировать тур?',
    answer: 'Вы можете забронировать тур через наш сайт, выбрав подходящий тур и заполнив форму бронирования. Наш менеджер свяжется с вами для подтверждения.',
  },
  {
    question: 'Какие способы оплаты принимаются?',
    answer: 'Мы принимаем оплату через банковские карты, электронные кошельки и банковский перевод. Подробности уточняйте при бронировании.',
  },
  {
    question: 'Могу ли я отменить бронирование?',
    answer: 'Да, вы можете отменить бронирование, но условия отмены зависят от выбранного тура. Пожалуйста, ознакомьтесь с правилами отмены при бронировании.',
  },
  {
    question: 'Что взять с собой на тур?',
    answer: 'Список необходимых вещей зависит от типа тура. Обычно рекомендуется взять удобную одежду, обувь, документы и личные вещи. Точный список мы предоставим перед поездкой.',
  },
];

const Faqsection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 text-white py-10">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12" data-aos="zoom-in">
        Часто задаваемые вопросы
      </h1>
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 border-b border-gray-700"
            data-aos="fade-up"
         
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 px-6 bg-gray-800 text-white text-left text-lg md:text-xl transition-all duration-300 hover:bg-gray-700 active:bg-gray-600 focus:outline-none"
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="py-4 px-6 bg-gray-800 text-gray-300 text-base" data-aos="fade-down">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqsection;