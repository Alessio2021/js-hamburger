const hamburger = document.querySelector(".hamburger-menu");
const active = document.querySelector(".fa-bars");
const notActive = document.querySelector(".fa-times");

active.addEventListener("click", function () {
    hamburger.classList.add("active");
});

notActive.addEventListener("click", function () {
    hamburger.classList.remove("active");
});