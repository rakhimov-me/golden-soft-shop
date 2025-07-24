import './Hero.scss';
import Button from '@/components/Button';

const Hero = () => {
  const products = [
    {
      imageSrc: '/src/assets/images/Lock-office.jpeg',
      title: 'Golden Soft  GS-200Z-5 для офиса',
      description1: 'Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.',
      description2: 'Подходит для установки на деревянную/межкомнатную дверь.',
      newPrice: '33 000₽',
      oldPrice: '37 000₽',
    },
    {
      imageSrc: '/src/assets/images/Lock-hotel.jpeg',
      title: 'Silver Lock SL-100Z для дома',
      description1: 'Надежный замок с матовым покрытием и современной конструкцией.',
      description2: 'Идеален для установки на металлические двери.',
      newPrice: '25 000₽',
      oldPrice: '29 000₽',
    },
    {
      imageSrc: '/src/assets/images/Lock-smart.jpeg',
      title: 'Smart Lock AI-300Z',
      description1: 'Умный замок с поддержкой биометрии и приложений.',
      description2: 'Подходит для офисов и домов с высокой безопасностью.',
      newPrice: '45 000₽',
    },
  ];

  const { productIndex = 0 } = {}; // Временная заглушка, можно убрать, если не нужен динамический индекс

  const {
    imageSrc,
    title,
    description1,
    description2,
    newPrice,
    oldPrice,
  } = products[productIndex];

  return (
    <section className="hero">
      <div className="hero__body container">
        <div className="hero__suggestion">
          <img
            className="hero__suggestion-img"
            src={imageSrc}
            alt={title}
            loading="lazy"
          />
          <div className="hero__content">
            <h1 className="hero__content-title">
              {title}
            </h1>
            <div className="hero__content-description">
              <p className="hero__content-description">
                {description1}
              </p>
              <p className="hero__content-description">
                {description2}
              </p>
            </div>
            <div className="hero__content-purchase">
              <p className="hero__content-purchase-title">
                Цена
              </p>
              <div className="hero__content-purchase-price">
                <p className="hero__content-purchase-price-new h5">
                  {newPrice}
                </p>
                {oldPrice && (
                  <p className="hero__content-purchase-price-old">
                    {oldPrice}
                  </p>
                )}
              </div>
              <Button
                className="hero__content-purchase-button"
                label="Добавить в корзину"
              />
            </div>
          </div>
        </div>
        <div className="hero__swiper">
          <img
            src="/src/assets/images/swiper.png"
            alt="Swiper Placeholder"
            className="hero__swiper-img"
            width={185}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;