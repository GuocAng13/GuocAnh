let i = 0;
function changeSlide() {
  const slideItems = document.querySelectorAll(".slide-show-item");
  slideItems.forEach((item, index) => {
    item.style.display = index === i ? "block" : "none";
  });
  i++;
  if (i === slideItems.length) {
    i = 0;
  }
  setTimeout(changeSlide, 2000);
}

changeSlide();