// hero.js
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded, initializing Swiper');

  const swiper = new Swiper('.hero__swiper .swiper', {
    modules: [Navigation, Pagination],
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    on: {
      init: () => console.log('Swiper initialized'),
      slideChange: () => console.log(`Slide changed to index: ${swiper.realIndex}`),
    },
  });

  if (!swiper) {
    console.error('Swiper initialization failed');
  } else {
    console.log('Swiper successfully initialized with dynamic pagination');
  }
});