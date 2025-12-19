const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

/* HAMBURGER TOGGLE */
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  hamburger.textContent =
    hamburger.textContent === "☰" ? "✖" : "☰";
});

/* SMOOTH SCROLL + AUTO CLOSE */
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    navMenu.classList.remove("show");
    hamburger.textContent = "☰";
  });
});
