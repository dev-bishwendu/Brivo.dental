var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    loop: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".mySwiperTwo", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".testimonial-button-next",
    prevEl: ".testimonial-button-prev",
    container: ".testimonial-button-container",
  },
  mousewheel: true,
    keyboard: true,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
});