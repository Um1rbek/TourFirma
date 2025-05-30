import React, { useEffect } from 'react';

const tours = [
  {
    title: 'Топовые природные аттракционы',
    description: 'Откройте для себя самые удивительные природные чудеса с нашими гидами.',
    price: '1500$',
    background: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  },
  {
    title: 'Пляжный отдых',
    description: 'Наслаждайтесь солнцем и морем на лучших пляжах мира.',
    price: '1200$',
    background: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
  },
  {
    title: 'Экскурсия в лес',
    description: 'Погрузитесь в мир природы с нашими лесными экскурсиями.',
    price: '800$',
    background: 'https://images.unsplash.com/photo-1472214103451-9374a3b28b0b',
  },
  {
    title: 'VIP-тур',
    description: 'Эксклюзивные туры с персональным гидом и особыми привилегиями.',
    price: '2500$',
    background: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  },
  {
    title: 'Путешествие в пустыню',
    description: 'Испытайте приключение в бескрайних песках пустыни.',
    price: '1000$',
    background: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
  },
  {
    title: 'Сафари-тур',
    description: 'Невероятное путешествие на сафари с наблюдением за дикими животными.',
    price: '1800$',
    background: 'https://images.unsplash.com/photo-1472214103451-9374a3b28b0b',
  },
  {
    title: 'Экстремальный тур',
    description: 'Испытайте адреналин с нашими экстремальными турами и приключениями.',
    price: '1800$',
    background: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  },
];

const Tursection = () => {
  useEffect(() => {
    // Additional AOS refresh to ensure animations work after dynamic content load
    const handleResize = () => AOS.refresh();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="bg-gray-900 text-white py-10 pt-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Наши услуги</h1>
      <ul className="relative max-w-6xl mx-auto">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-pink-600 to-transparent bg-[length:2px_20px] z-0" />
        {tours.map((tour, index) => (
          <li
            key={index}
            className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-10 relative z-10`}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            data-aos-delay={index * 200} // Staggered delay for elegance
          >
            <div
              className="w-full md:w-1/2 bg-cover bg-center p-6 rounded-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-100 active:shadow-md"
              style={{ backgroundImage: `url(${tour.background})` }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{tour.title}</h3>
              <p className="text-sm md:text-base mb-4">{tour.description}</p>
              <div className="text-2xl md:text-3xl font-bold text-pink-500">{tour.price}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tursection;