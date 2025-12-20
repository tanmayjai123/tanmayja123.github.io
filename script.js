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
});  font-size: 1.6rem;
  color: #e0f2fe;
  border-left: 5px solid #38bdf8;
  padding-left: 12px;
}

section p,
section li {
  color: #cbd5f5;
  font-size: 0.95rem;
}

/* =====================
   LINKS
===================== */
a {
  color: #38bdf8;
  text-decoration: none;
}

a:hover {
  color: #7dd3fc;
}

/* =====================
   FOOTER
===================== */
footer {
  background: rgba(2, 6, 23, 0.9);
  color: #94a3b8;
  text-align: center;
  padding: 1.5rem;
  margin-top: 3rem;
  border-top: 1px solid rgba(148, 163, 184, 0.1);
}

/* =====================
   MOBILE NAVBAR
===================== */
@media (max-width: 768px) {

  .hamburger {
    display: block;
  }

  .nav-menu {
    display: none;
    position: absolute;
    top: 65px;
    left: 0;
    width: 100%;
    background: rgba(2, 6, 23, 0.95);
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    backdrop-filter: blur(10px);
  }

  .nav-menu.show {
    display: flex;
  }

  .nav-menu li {
    padding: 14px 0;
  }
}
