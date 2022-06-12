const elMenuBtn = document.querySelector(".header__menu-btn");
const elHeader = document.querySelector(".header");

elMenuBtn.addEventListener("click", () => {
  elHeader.classList.toggle("header--active");
});
