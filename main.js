const hamburger = document.querySelector(".hamburger-menu");
const active = document.querySelector(".header-right a i");
const notActive = document.querySelector(".close");

active.addEventListener("click", function () {
    hamburger.classList.add("active");
});

notActive.addEventListener("click", function () {
    hamburger.classList.remove("active");
});