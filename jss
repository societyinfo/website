document.addEventListener("DOMContentLoaded", () => {

  // Mobile navigation
  const menu = document.querySelector(".nav");
  const toggle = document.querySelector(".menu-toggle");

  toggle?.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });

  document.querySelectorAll(".nav a").forEach(a => {
    a.addEventListener("click", () => {
      menu?.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  // Current year
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

});
    window.location.href =
      `mailto:infosociety2027@gmail.com?subject=${subject}&body=${body}`;
  });
});
