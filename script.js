const paginationBtns = document.querySelectorAll(".slider__pagination");
const slideItems = document.querySelectorAll(".slider__item");
let slide = document.querySelector(".slider");

const slideLength = slideItems.length;
// Currently using this variable for my timedSlide function to iterate through the different slides
let i = 1;
//Change this value to change the automated delay, currently set to 12 seconds
const delay = 12000;

function activeCheck(list) {
  for (let i = 0; i < list.length; i++) {
    const classList = list[i].classList;
    if (!classList.contains("active")) {
      continue;
    }
    classList.remove("active");
  }
}

function timeSlide() {
  setInterval(function () {
    activeCheck(slideItems);
    slideItems[i].classList.add("active");
    activeCheck(paginationBtns);
    paginationBtns[i].classList.add("active");
    i = (i + 1) % slideLength;
  }, delay);
}

paginationBtns.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    activeCheck(paginationBtns);
    btn.classList.add("active");
    slideItems.forEach(function () {
      activeCheck(slideItems);
    });
    slideItems[index].classList.add("active");
  });
});

// Calling the timedSlide function on window load
window.addEventListener("load", function () {
  timeSlide();
});
