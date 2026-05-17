(function() {
  "use strict";

  const select = (selector, all = false) => {
    selector = selector.trim();
    if (all) {
      return Array.from(document.querySelectorAll(selector));
    }
    return document.querySelector(selector);
  };

  const on = (type, selector, listener, all = false) => {
    const elements = select(selector, all);
    if (!elements) return;

    if (all) {
      elements.forEach((element) => element.addEventListener(type, listener));
      return;
    }

    elements.addEventListener(type, listener);
  };

  const navbarlinks = select("#navbar .scrollto", true);

  const setActiveNavLink = () => {
    const position = window.scrollY + 220;

    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;

      const section = select(navbarlink.hash);
      if (!section) return;

      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };

  const scrollToSection = (selector) => {
    const section = select(selector);
    if (!section) return;

    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    });
  };

  const setBackToTopState = () => {
    const backToTop = select(".back-to-top");
    if (!backToTop) return;

    if (window.scrollY > 100) {
      backToTop.classList.add("active");
    } else {
      backToTop.classList.remove("active");
    }
  };

  const closeMobileNav = () => {
    const body = select("body");
    const navbarToggle = select(".mobile-nav-toggle");

    if (!body || !body.classList.contains("mobile-nav-active")) return;

    body.classList.remove("mobile-nav-active");
    if (navbarToggle) {
      navbarToggle.classList.toggle("bi-list", true);
      navbarToggle.classList.toggle("bi-x", false);
      navbarToggle.setAttribute("aria-expanded", "false");
    }
  };

  window.addEventListener("load", () => {
    setActiveNavLink();
    setBackToTopState();

    if (window.location.hash && select(window.location.hash)) {
      scrollToSection(window.location.hash);
    }
  });

  document.addEventListener("scroll", () => {
    setActiveNavLink();
    setBackToTopState();
  });

  on("click", ".mobile-nav-toggle", function() {
    const body = select("body");
    if (!body) return;

    body.classList.toggle("mobile-nav-active");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
    this.setAttribute("aria-expanded", body.classList.contains("mobile-nav-active").toString());
  });

  on("click", ".scrollto", function(event) {
    if (!this.hash || !select(this.hash)) return;

    event.preventDefault();
    closeMobileNav();
    scrollToSection(this.hash);
  }, true);

  if (window.AOS) {
    window.addEventListener("load", () => {
      AOS.init({
        duration: 700,
        easing: "ease-out-cubic",
        once: true,
        mirror: false
      });
    });
  }
})();
