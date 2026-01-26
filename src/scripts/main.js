/* global Swiper */
'use strict';

window.addEventListener('load', () => {
  const swiper = new Swiper('.work-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    loop: false,

    grabCursor: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
});
