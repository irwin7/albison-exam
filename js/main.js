const elMenuBtn = document.querySelector(".header__menu-btn");
const elHeader = document.querySelector(".header");
const elBody = document.querySelector("body");

elMenuBtn.addEventListener("click", () => {
  elHeader.classList.toggle("header--active");
  elBody.classList.toggle("hidden");
});
