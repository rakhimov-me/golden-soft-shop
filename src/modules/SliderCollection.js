const rootSelector = '[data-js-slider]'

class Slider {
  selectors = {
    root: rootSelector,
    swiper:  '[data-js-swiper]',
    navigation:  '[data-js-slider-navigation]',
    previousButton:  '[data-js-slider-previous-button]',
    nextButton:  '[data-js-slider-next-button]',
    pagination: '[data-js-slider-pagination]',
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.swiperElement = this.rootElement.querySelector(this.selectors.swiper)

  }
}

class SliderCollection {
  constructor() {
    this.init()
  }
  init() {
    document.querySelector(rootSelector).forEach((element) => {
      new Slider(element)
    })
  }
}

export default SliderCollection