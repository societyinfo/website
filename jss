document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav");
  const toggle = document.querySelector(".menu-toggle");

  toggle?.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });

  document.querySelectorAll(".nav a").forEach(a =>
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    })
  );

  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const form = document.getElementById("interestForm");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const subject = encodeURIComponent(
      "Expression of interest – NPRE Luxembourg"
    );

    const body = encodeURIComponent(
      `Name: ${data.get("name")}\n` +
      `Email: ${data.get("email")}\n` +
      `Interest: ${data.get("interest")}\n\n` +
      `Message:\n${data.get("message") || ""}`
    );

    window.location.href =
      `mailto:infosociety2027@gmail.com?subject=${subject}&body=${body}`;
  });
});
