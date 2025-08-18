import './Hero.scss';
import HeroCard from '@/Components/HeroCard';
import suggestedProductsItems from "./SuggestedProductsItems.js";
import SliderNavigation from "@/Components/Slider/Components/SliderNavigation/index.js";
import Slider from "@/Components/Slider/index.js";

const Hero = () => {
  const sliderNavigationId = 'hero-slider-navigation';

  const heroSliderParams = {
    slidesPerView: 1,
    slidesPerGroup: 1,
  };

  return (
    <section className="hero">
      <div className="hero__body container">
        <Slider
          navigationTargetElementId={sliderNavigationId}
          sliderParams={heroSliderParams}
        >
          {suggestedProductsItems.map((product, index) => (
            <HeroCard
              {...product}
              key={index}
            />
          ))}
        </Slider>
        <div className="hero__swiper">
          <SliderNavigation
            mode='hero'
            id={sliderNavigationId}
            hasPagination
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;