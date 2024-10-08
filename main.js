const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".container nav ul");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
