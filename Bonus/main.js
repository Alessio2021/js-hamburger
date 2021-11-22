const hamburger = document.querySelector(".hamburger-menu");
const active = document.querySelector(".header-right a i");
const notActive = document.querySelector(".close");
const text = document.querySelector("ul li a")

active.addEventListener("click", function () {
    hamburger.classList.add("active");
    hamburger.style.backgroundColor = "grey";
    text.classList.add("orangered");
});

notActive.addEventListener("click", function () {
    hamburger.classList.remove("active");
});

