// images = 7 (0,1,2,3,4,5,6)

let flag = 0;

function controller(x) {
  flag = flag + x;

  // left
  //   flag = 2 + (-1) = 1; it will show previos image

  //right
  //   flag = 2 + (1) = 3; it will show next image

  slideshow(flag);
}

slideshow(flag);

function slideshow(num) {
  let slides = document.getElementsByClassName("slide");
  //   HTMLCollection(7) [div.slide, div.slide, div.slide, div.slide, div.slide, div.slide, div.slide]

  if (num === slides.length) {
    flag = 0;
    num = 0;
  }

  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[num].style.display = "block";
}
