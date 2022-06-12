const elMenuBtn = document.querySelector(".header__menu-btn");
const elHeader = document.querySelector(".header");
const elBody = document.querySelector("body");

elMenuBtn.addEventListener("click", () => {
  elHeader.classList.toggle("header--active");
  elBody.classList.toggle("hidden");
});

// Slick

$('.featured__list').slick({
    dots: false,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
          breakpoint: 844,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
      }
    ]
  });