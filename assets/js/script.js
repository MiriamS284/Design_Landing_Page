document.addEventListener("DOMContentLoaded", (event) => {
  const menu = document.querySelector("#open-mobile-btn");
  const closeBtn = document.querySelector("#close-mobile-btn");
  const navBar = document.querySelector(".navbar-nav");

  const navBarToggle = () => navBar.classList.toggle("active");

  menu.addEventListener("click", navBarToggle);
  closeBtn.addEventListener("click", navBarToggle);
});
