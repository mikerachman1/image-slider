let slides = document.getElementsByClassName('slider-slide');
let navlinks = document.getElementsByClassName('slider-dot');

let currentSlide = 0;

const navNext = document.getElementById("nav-button-next");
const navPrev = document.getElementById("nav-button-prev");

const changeSlide = (moveTo) => {
  // if at end of slides moving forward move back to start, if at start moving back move to end
  if (moveTo >= slides.length) {moveTo = 0;}
  if (moveTo < 0) {moveTo = slides.length -1;}
  
  // toggle active class off previous slide and onto new slide
  slides[currentSlide].classList.toggle("active");
  navlinks[currentSlide].classList.toggle("active");
  slides[moveTo].classList.toggle("active");
  navlinks[moveTo].classList.toggle("active");

  currentSlide = moveTo
}

navNext.addEventListener("click", () => {
  changeSlide(currentSlide + 1)
});
navPrev.addEventListener("click", () => {
   changeSlide(currentSlide -1)
});

document.querySelectorAll('.slider-dot').forEach((dot, dotIndex) => {
  dot.addEventListener('click', () => {
    if (currentSlide !== dotIndex) {
      changeSlide(dotIndex);
    }
  })
})