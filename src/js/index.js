import "./swiper";

document.addEventListener("DOMContentLoaded", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

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

  const telegramButtons = document.querySelectorAll(".telegram-btn");

  telegramButtons.forEach((button) => {
    button.addEventListener("click", () => {
      window.open("https://t.me/barsbarseg", "_blank");
    });
  });
  const menuBtn = document.querySelector(".menu-btn");
  const menuMobile = document.querySelector(".menu-mobile");
  const menuLinks = document.querySelectorAll("[data-link='mobile-menu']");

  const toggleMobileMenu = () => {
    if (!isMenuOpen) {
      menuMobile.classList.remove("menu-closing");
      menuMobile.classList.add("menu-open");
      menuBtn.classList.add("menu-open");
      document.body.style.overflow = "hidden";
      isMenuOpen = true;
    } else {
      menuMobile.classList.add("menu-closing");
      menuBtn.classList.remove("menu-open");
      document.body.style.overflow = "inherit";

      setTimeout(() => {
        menuMobile.classList.remove("menu-closing");
        menuMobile.classList.remove("menu-open");
        isMenuOpen = false;
      }, 500);
    }
  };

  let isMenuOpen = false;

  menuBtn.addEventListener("click", toggleMobileMenu);

  menuLinks.forEach((link) => link.addEventListener("click", toggleMobileMenu));
});
