import React from 'react';

const newsItems = [
  {
    title: 'Распродажа летнего приключения в пустыне!',
    description: 'Получите 20% скидку на наш тур "Пустынное приключение" этим летом. Исследуйте золотые дюны, покатайтесь на верблюдах и насладитесь закатами. Организованное время!',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    buttonText: 'Узнать больше',
  },
  {
    title: 'Новый пакет "Вид на океан"',
    description: 'Представляем новый тур с потрясающими видами на океан, нацеленный на дельфинами и круизом с ужином на закате. Бронируйте сейчас для незабываемого опыта!',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4',
    buttonText: 'Узнать больше',
  },
  {
    title: 'Скидка на зимний отдых в природе',
    description: 'Получите специальную скидку 15% на тур "Зимний приключения в горах". Насладитесь снежными пейзажами и лыжами. Бронируйте сейчас!',
    image: 'https://images.unsplash.com/photo-1464822759028-fed622ff2c3b',
    buttonText: 'Узнать больше',
  },
  {
    title: 'Обновление тура "Горящие огни"',
    description: 'Улучшите свой опыт с туром "Горящие огни" с VIP-пакетом, включающим доступ на крышу и изысканный ужин. Доступно ограниченное время!',
    image: 'https://images.unsplash.com/photo-1472214103451-9374a3b28b0b',
    buttonText: 'Узнать больше',
  },
  {
    title: 'Молниеносная распродажа: 10% скидка на все туры',
    description: 'Специальный Подушите 10% скидку на все туры. Успейте забронировать до 48 часов. Идеальная возможность спланировать ваше следующее приключение. Не упустите шанс!',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    buttonText: 'Узнать больше',
  },
  {
    title: 'Новые виды на закат',
    description: 'Наслаждайтесь потрясающими видами на закат с нашим новым туром. Ограниченное предложение, бронируйте сейчас!',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    buttonText: 'Узнать больше',
  },
];

const Newsection = () => {
  return (
    <section className="bg-gray-900 text-white py-10 pt-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12" data-aos="zoom-in">
        Последние новости и предложения
      </h1>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="relative bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl active:shadow-lg"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2" data-aos="fade-right">
                {item.title}
              </h3>
              <p className="text-gray-300 text-base mb-4" data-aos="fade-up" data-aos-delay="200">
                {item.description}
              </p>
              <button
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600 active:bg-purple-700"
              >
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Newsection;