import React, { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Salom, BU  tur firma',
    description: 'HTML, CSS, JS va React bilan ishlaydi.',
    image: 'https://dolorestravel.com/uploads/Guide/141/658971b6efb99.jpg', // o'zingga mos rasm yo'li
  },
  {
    title: 'Tur firmaga hush kelib siz',
    description: 'Bu yerda turlar bor.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-IUORcSJaVGQe98LNAF234rZjqoFSNSqGsw&s',
  },
  {
    title: 'Tour Farm GGGG',
    description: 'Telegram orqali bog‘laning.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgoViBIUpGFWSHZSNpCNn0oLZbGGz0ryN5DP7B7p_HZ4SzmdTMDkeS6maU_-8xZk5SU4&usqp=CAU',
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center px-4 transition-all duration-1000 w-full"
      style={{
        backgroundImage: `url(${slide.image})`,
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-xl text-center max-w-2xl text-white">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 ">
          {slide.title}
        </h1>
        <p className="text-lg text-gray-300">{slide.description}</p>
      </div>
    </div>
  );
};

export default Slider;
