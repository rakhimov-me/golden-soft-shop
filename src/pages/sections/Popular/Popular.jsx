import './Popular.scss';
import ProductCard from '@/Components/ProductCard';
import popularProductsItems from "./PopularProductsItems.js";

import SliderNavigation
  from "@/Components/Slider/Components/SliderNavigation/index.js";
import Slider from "@/Components/Slider/index.js";

const Popular = (props) => {
  const {} = props;

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
            {popularProductsItems.map((product, index) => (
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