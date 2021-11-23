const hamburger = document.querySelector(".hamburger-menu");
const active = document.querySelector(".header-right a i");
const notActive = document.querySelector(".close");
const text = document.querySelector(".hamburger-menu ul li a")

active.addEventListener("click", function () {
    hamburger.classList.add("active");
    hamburger.style.backgroundColor = "grey";
    text.style.color = "orange";
});

notActive.addEventListener("click", function () {
    hamburger.classList.remove("active");
});


const ul = document.querySelector(".list");
const testo = "Domande Frequenti";
const li = `<li><a href="#">${testo}</a><//li>`;

ul.innerHTML += li