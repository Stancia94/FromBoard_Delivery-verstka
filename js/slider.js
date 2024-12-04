document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.list');
  const slides = document.querySelectorAll('.card');
  const slideLeftButton = document.getElementById('slideLeft');
  const slideRightButton = document.getElementById('slideRight');
console.log(slideRightButton);
  let currentIndex = 0;

  // Функция для обновления слайдера
  function updateSlider() {
    let visibleSlides = 2;

    // Определяем количество видимых слайдов в зависимости от ширины окна
    if (window.innerWidth <= 1024) {
      visibleSlides = 1;
    }
    // Сдвигаем слайды
    slider.style.transform = `translateX(-${(100 / visibleSlides) * currentIndex}%)`;
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