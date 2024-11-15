// Получаем элементы слайдера
const slider2 = document.querySelector(".reviews__container");
console.log(slider2);
const prevButton2 = document.querySelector(".reviews__button-left");
const nextButton2 = document.querySelector(".reviews__button-right");
console.log(prevButton);

const slides2 = Array.from(slider2.querySelector(".reviews__card"));
console.log(slides);

const slideCount2 = slides2.length;
let slideIndex2 = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex2 = (slideIndex2 - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex2 = (slideIndex2 + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex2) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

// Инициализация слайдера
updateSlider();


