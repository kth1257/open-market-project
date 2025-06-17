export default function createCarousel() {
  const carousel = document.createElement('div');
  carousel.className = 'carousel';

  carousel.innerHTML = `
    <div class="carousel">
    <div class="slides">
      <div class="slide">
      <img src="./src/assets/images/banner-1.png" alt="배너 1" />
      </div>
      <div class="slide">
      <img src="./src/assets/images/banner-2.png" alt="배너 2" />
      </div>
      <div class="slide">
      <img src="./src/assets/images/banner-3.png" alt="배너 3" />
      </div>
    </div>
    <button class="prev">
      <img src="./src/assets/images/icon-left-arrow.svg" alt="">
    </button>
    <button class="next">
      <img src="./src/assets/images/icon-right-arrow.svg" alt="">
    </button>
    <div class="dots">
      <span class="dot active"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </div>
  `;

  const slides = carousel.querySelector('.slides');
  const dots = carousel.querySelectorAll('.dot');
  let currentIndex = 0;

  function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  carousel.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + dots.length) % dots.length;
    showSlide(currentIndex);
  });
  carousel.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1 + dots.length) % dots.length;
    showSlide(currentIndex);
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % dots.length;
    showSlide(currentIndex);
  }, 5000);

  return carousel;
}