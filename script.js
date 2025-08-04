document.getElementById("menu-toggle").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  const navbar = document.getElementById("navbar");
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    navbar.classList.add("scrolled");
  } else if (window.scrollY < 50) {
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const navLinks = document.getElementById("nav-links");
  if (window.scrollY > 50 || navLinks.classList.contains("active")) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
