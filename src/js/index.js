import "./swiper";

document.addEventListener("DOMContentLoaded", () => {
  function theme() {
    const toggleTheme = document.querySelector(".toggle-theme");
    let el = document.documentElement;

    toggleTheme.addEventListener("click", () => {
      if (el.hasAttribute("data-theme")) {
        el.removeAttribute("data-theme");
        localStorage.removeItem("theme");
      } else {
        el.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "data");
      }
    });

    if (localStorage.getItem("theme") !== null) {
      el.setAttribute("data-theme", "dark");
    }
  }

  theme();

  const themeButton = document.querySelector(".toggle-theme");
  const icons = document.querySelectorAll(".icon-img");

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    icons.forEach((icon) => {
      const src = icon.getAttribute("src");
      if (document.body.classList.contains("light-theme")) {
        icon.setAttribute("src", src.replace("-dark", "-light"));
      } else {
        icon.setAttribute("src", src.replace("-light", "-dark"));
      }
    });
  });

  const menuBtn = document.querySelector(".menu-btn");
  const menuMobile = document.querySelector(".menu-mobile");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("menu-open");
    menuMobile.classList.toggle("menu-open");
  });
});
