function zeroAppend(num) {
  if (num >= 10) return num;
  else return `0${num}`;
}
function slider() {
  const slides = document.querySelectorAll(".offer__slide"),
    slider = document.querySelector(".offer__slider"),
    prev = document.querySelector(".offer__slider-prev"),
    next = document.querySelector(".offer__slider-next"),
    current = document.getElementById("current"),
    slidesWrapper = document.querySelector(".offer__slider-wrapper"),
    slidesInner = document.querySelector(".offer_slider-inner"),
    width = window.getComputedStyle(slidesWrapper).width,
    total = document.getElementById("total");

  slider.style.position = "relative";

  const indicators = document.createElement("ol"),
    dots = [];

  indicators.classList.add("carousel-indicators");
  slider.append(indicators);

  let slideIndex = 1,
    offset = 0;

  slides.forEach((item, index) => {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", index + 1);
    dot.classList.add("dot");
    indicators.append(dot);
    dots.push(dot);
  });

  function setSlider() {
    current.innerText = zeroAppend(slideIndex);
    dots.forEach((dot) => (dot.style.opacity = ".5"));
    dots[slideIndex - 1].style.opacity = 1;
    slidesInner.style.transform = `translateX(-${offset}px)`;
  }

  slidesInner.style.width = 100 * slides.length + "%";
  slidesInner.style.display = "flex";
  slidesInner.style.transition = "0.5s all";
  slidesWrapper.style.overflow = "hidden";
  slides.forEach((item) => (item.style.width = width));
  total.innerText = zeroAppend(slides.length);

  setSlider();
  next.addEventListener("click", () => {
    if (offset == width.slice(0, -2) * (slides.length - 1)) {
      offset = 0;
      slideIndex = 1;
    } else {
      slideIndex++;
      offset += +width.slice(0, -2);
    }
    setSlider();
  });

  prev.addEventListener("click", () => {
    if (offset == 0) {
      slideIndex = slides.length;
      offset = +width.slice(0, -2) * (slides.length - 1);
    } else {
      slideIndex--;
      offset -= +width.slice(0, -2);
    }
    setSlider();
  });

  dots.forEach((dot) =>
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");
      slideIndex = slideTo;
      offset = +width.slice(0, -2) * (slideTo - 1);
      setSlider();
    })
  );
}

export default  slider;