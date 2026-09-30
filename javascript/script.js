/* =========================================
   SHIVANI PORTFOLIO JAVASCRIPT
========================================= */

/* =========================================
   THEME TOGGLE
========================================= */

const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");

    themeToggle.textContent = "☀️";

    themeToggle.setAttribute("aria-label", "Switch to light mode");

    themeToggle.setAttribute("aria-pressed", "true");
  } else {
    document.documentElement.removeAttribute("data-theme");

    themeToggle.textContent = "🌙";

    themeToggle.setAttribute("aria-label", "Switch to dark mode");

    themeToggle.setAttribute("aria-pressed", "false");
  }

  localStorage.setItem("portfolio-theme", theme);
}

/* Load saved theme */

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
  setTheme("dark");
} else {
  setTheme("light");
}

/* Theme button */

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";

    if (isDark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  });
}

/* =========================================
   INTERACTIVE BACKGROUND
========================================= */

const ambientBackground = document.querySelector(".ambient-background");

if (ambientBackground) {
  document.addEventListener("mousemove", function (event) {
    const x = (event.clientX / window.innerWidth - 0.5) * 40;

    const y = (event.clientY / window.innerHeight - 0.5) * 40;

    ambientBackground.style.setProperty("--mouse-x", `${x}px`);

    ambientBackground.style.setProperty("--mouse-y", `${y}px`);
  });
}

/* =========================================
   CONTACT FORM DEMO
========================================= */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert(
      "Thank you! Your message form is ready to be connected to a backend.",
    );

    contactForm.reset();
  });
}
