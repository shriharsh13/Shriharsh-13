(function() {
  "use strict";

  const setTheme = (theme) => {
    const normalizedTheme = theme === "light" ? "light" : "dark";
    const isLight = normalizedTheme === "light";
    const toggle = document.querySelector(".theme-toggle");

    document.documentElement.dataset.theme = normalizedTheme;
    try {
      localStorage.setItem("theme", normalizedTheme);
    } catch (error) {
      // Storage can be unavailable in private or restricted browser contexts.
    }

    if (toggle) {
      toggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
      toggle.setAttribute("aria-pressed", isLight.toString());
    }
  };

  let savedTheme = "dark";
  try {
    savedTheme = localStorage.getItem("theme") || "dark";
  } catch (error) {
    savedTheme = "dark";
  }

  setTheme(savedTheme);

  document.querySelector(".theme-toggle")?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", link.getAttribute("href"));
    });
  });
})();
