@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

/* =====================
   RESET
===================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* =====================
   BODY (DARK)
===================== */
body {
  font-family: 'Poppins', sans-serif;
  background: radial-gradient(circle at top, #0f172a, #020617);
  color: #e5e7eb;
  line-height: 1.6;
}

/* =====================
   HEADER & NAVBAR
===================== */
header {
  background: rgba(2, 6, 23, 0.85);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(148, 163, 184, 0.1);
}

.navbar {
  max-width: 1100px;
  margin: auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.logo {
  color: #38bdf8;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* =====================
   NAV LINKS
===================== */
.nav-menu {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-menu li a {
  color: #cbd5f5;
  text-decoration: none;
  font-size: 0.95rem;
  position: relative;
}

.nav-menu li a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 0%;
  height: 2px;
  background: #38bdf8;
  transition: width 0.3s ease;
}

.nav-menu li a:hover::after {
  width: 100%;
}

/* =====================
   HAMBURGER
===================== */
.hamburger {
  display: none;
  font-size: 28px;
  color: #e5e7eb;
  cursor: pointer;
}

/* =====================
   SECTIONS (GLASS LOOK)
===================== */
section {
  max-width: 1100px;
  margin: 2.5rem auto;
  padding: 2rem;
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(148, 163, 184, 0.08);
}

section h2 {
  margin-bottom: 1rem;
  font-size: 1.6rem;
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