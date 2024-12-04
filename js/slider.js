document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.list');
  const slides = document.querySelectorAll('.card');
  const slide = document.querySelector('.card');
  const slideLeftButton = document.getElementById('slideLeft');
  const slideRightButton = document.getElementById('slideRight');

  let widthSlide = parseInt(getComputedStyle(slide).width);
  let sliderGap = parseInt(getComputedStyle(slider).gap);

  window.addEventListener('resize', (event) => {
    widthSlide = parseInt(getComputedStyle(slide).width);
    sliderGap = parseInt(getComputedStyle(slider).gap);
  });

  let currentIndex = 0;

  // Функция для обновления слайдера
  function updateSlider() {
    let visibleSlides = 2;

    // Определяем количество видимых слайдов в зависимости от ширины окна
    if (window.innerWidth <= 1024) {
      visibleSlides = 1;
    }
    // Сдвигаем слайды
    slider.style.transform = `translateX(-${(sliderGap + widthSlide) * currentIndex}px)`;
  }

  // Переключение на следующий слайд
  slideRightButton.addEventListener('click', function () {
    const visibleSlides = (window.innerWidth <= 1024) ? 1 : 2;

    if (currentIndex < slides.length - visibleSlides) {
      currentIndex++;
    } else {
      currentIndex = 0;  // Переход к первому слайду
    }
    updateSlider();
  });

  // Переключение на предыдущий слайд
  slideLeftButton.addEventListener('click', function () {
    const visibleSlides = (window.innerWidth <= 1024) ? 1 : 2;
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slides.length - visibleSlides;  // Переход к последнему слайду
    }
    updateSlider();
  });

  // Обновление слайдера при изменении размера окна
  window.addEventListener('resize', updateSlider);

  // Изначальное обновление слайдера
  updateSlider();
});