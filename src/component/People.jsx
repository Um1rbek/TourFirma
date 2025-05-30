
import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Итан Уилсон',
    date: '28 апреля 2025',
    comment: 'Горящий тур был фантастическим. VIP-доступ того стоил.',
    image: 'https://via.placeholder.com/50', // Placeholder image
  },
  {
    name: 'Ава Мартинес',
    date: '25 апреля 2025',
    comment: 'Тур по пустыне был взрывным. Вид просто космические.',
    image: 'https://via.placeholder.com/50', // Placeholder image
  },
  {
    name: 'Джеймс Ли',
    date: '20 апреля 2025',
    comment: 'Горный ретрит был умиротворяющим. Идеальный отдых.',
    image: 'https://via.placeholder.com/50', // Placeholder image
  },
  {
    name: 'Джон Доу',
    date: '20 мая 2025',
    comment: 'Тур по пустыне был невероятен. Безупречный опыт с потрясающими видами.',
    image: 'https://via.placeholder.com/50', // Placeholder image
  },
];

const People = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gray-900 text-white py-10 pt-16 w-full">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12" data-aos="zoom-in">
        Что говорят наши клиенты
      </h1>
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex justify-center">
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2 transition-all duration-300 hover:shadow-xl active:shadow-lg"
            data-aos="fade-up"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold" data-aos="fade-right">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-400 text-sm" data-aos="fade-left">
                  {testimonials[currentIndex].date} 
                </p>
              </div>
            </div>
            <p className="text-base" data-aos="fade-up" data-aos-delay="200">
              {testimonials[currentIndex].comment} 
            </p>
          </div>
        </div>
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 active:bg-gray-500 transition-all duration-300"
        >
          ←
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 active:bg-gray-500 transition-all duration-300"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default People;