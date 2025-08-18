import 'swiper/css'
import './Slider.scss'
import SliderNavigation from "@/Components/Slider/Components/SliderNavigation/index.js";

const defaultSliderParams  = {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 30,
}

const Slider = (props) => {
  const {
    children,
    navigationTargetElementId = null,
    sliderParams = defaultSliderParams,
  } = props

  return (
    <div
      className="slider"
      style={{ maxWidth: '100%' }}
      data-js-slider={JSON.stringify({
        sliderParams,
        navigationTargetElementId,
      })}
    >
      <div className="slider__swiper swiper" data-js-slider-swiper="">
        {!navigationTargetElementId && (
          <SliderNavigation
            className="slider__navigation"
          />
        )}

        <ul className="slider__list swiper-wrapper">
          {children.map((slide, index) => (
            <li className="slider__item swiper-slide" key={index}>
              {slide}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Slider