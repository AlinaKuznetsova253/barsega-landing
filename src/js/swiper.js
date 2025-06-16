import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-right",
      prevEl: ".swiper-button-left",
    },
    modules: [Navigation, Pagination],
  });

  const swiperSecond = new Swiper(".swiper-second", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-right-about",
      prevEl: ".swiper-button-left-about",
    },
    modules: [Navigation, Pagination],
  });
});
