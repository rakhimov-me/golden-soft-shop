import './Popular.scss';
import ProductCard from '@/Components/ProductCard';

import { ReactComponent as NextIcon } from "@/assets/icons/arrow-next.svg"
import { ReactComponent as PrevIcon } from "@/assets/icons/arrow-prev.svg"
import Button from "@/Components/Button/index.js";
import SliderNavigation
  from "@/Components/Slider/Components/SliderNavigation/index.js";
import Slider from "@/Components/Slider/index.js";

const Popular = (props) => {
  const {} = props;

  const products = [
    {
      image: '/src/assets/images/Lock-hotel-2.jpeg',
      title: 'Дверной замок Golden Soft для отелей',
      priceInfo: { current: '33 000₽', previous: '37 000₽' },
      statuses: { inStock: true,  withGift: false, onSale: false },
      reviewSummary: { averageRating: 2.2, reviewsCount: 5 },
      outOfCatalog: true
    },
    {
      image: '/src/assets/images/Lock-hotel-3.jpeg',
      title: 'Вариативный замок Golden Soft для отелей',
      priceInfo: { current: '7 000₽',  previous: '8 000₽' },
      statuses: { inStock: false, withGift: true, onSale: true  },
      reviewSummary: { averageRating: 4.0, reviewsCount: 8 },
      outOfCatalog: true
    },
    {
      image: '/src/assets/images/Lock-office.jpeg',
      title: 'Дверной замок Golden Soft для офиса',
      priceInfo: { current: '33 000₽', previous: '39 000₽' },
      statuses: { inStock: true,  withGift: true, onSale: true  },
      reviewSummary: { averageRating: 3.5, reviewsCount: 5 },
      outOfCatalog: true
    },
    {
      image: '/src/assets/images/Lock-office-2.jpeg',
      title: 'Дверной замок Golden Soft для дома',
      priceInfo: { current: '9 000₽',  previous: '12 000₽' },
      statuses: { inStock: false, withGift: false, onSale: true  },
      reviewSummary: { averageRating: 0, reviewsCount: 0 },
      outOfCatalog: true
    }
  ];

  const sliderNavigationId= 'popular-slider-navigation'

  return (
    <section className="popular">
      <div className="popular__body container">
        <div className="popular__head">
          <h2 className="popular__head-title">Наши популярные продукты</h2>
          <div className="popular__head-arrows">
            <SliderNavigation
              mode='hero'
              id={sliderNavigationId}
            />
          </div>
        </div>
        <div className="popular__cards">
          <Slider
            navigationTargetElementId={sliderNavigationId}
          >
            {products.map((product, index) => (
              <ProductCard
                {...product}
                key={index}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Popular;