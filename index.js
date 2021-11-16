const slides = document.querySelectorAll(".slide");
const shopSlides = document.querySelectorAll(".shop-slide");
const arrowRight = document.getElementById("right");
const arrowLeft = document.getElementById("left");
const menuBtn = document.querySelector(".menu-btn");
const logo = document.querySelector(".logo");
const head = document.querySelector(".head");
const header = document.querySelector("#header");
count = 0;

function prevSlide() {
  
}

function nextSlide() {
  
}

arrowLeft.addEventListener("click", prevSlide)

arrowRight.addEventListener("click", nextSlide)

menuBtn.addEventListener("click", () => {
  let menuAttr = menuBtn.getAttribute("aria-expanded");
  let headAttr = head.getAttribute("aria-expanded");
  let logoAttr = logo.getAttribute("aria-expanded");

if (menuAttr === "false") {
  menuBtn.setAttribute("aria-expanded", true)
  head.setAttribute("aria-expanded", true)
  logo.setAttribute("aria-expanded", false)
  header.classList.add("header");
} else {
  menuBtn.setAttribute("aria-expanded", false)
  head.setAttribute("aria-expanded", false)
  logo.setAttribute("aria-expanded", true)
  header.classList.remove("header");
}
});

