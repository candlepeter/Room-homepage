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
  if (count === 0) {
    //removes the previous classlist
    slides[count].classList.remove("current");
    shopSlides[count].classList.remove("current");
    //initializes the count to the last slide
    count = (slides.length-1);
    //adds the last slide
    slides[count].classList.add("current");
    shopSlides[count].classList.add("current");
  } else {
    //removes the previous slide
    slides[count].classList.remove("current");
    shopSlides[count].classList.remove("current");
    //decrements the count
    count--;
    //set in the next slide
    slides[count].classList.add("current");
    shopSlides[count].classList.add("current");
  }
}

function nextSlide() {
  if (count === (slides.length-1)) {
    //removes the previous classlist
    slides[count].classList.remove("current");
    shopSlides[count].classList.remove("current");
    //initializes the count
    count = 0;
    //resets the slide
    startSlide();
  } else {
    //removes the previous slide
    slides[count].classList.remove("current");
    shopSlides[count].classList.remove("current");
    //increments the count
    count++
    //set in the next slide
    slides[count].classList.add("current");
    shopSlides[count].classList.add("current");
  }
}

function startSlide() {
  slides[0].classList.add("current");
  shopSlides[0].classList.add("current");
}

startSlide();

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

