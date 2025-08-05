// Событие для изменения формы при скролле
window.addEventListener('scroll', function () {
	const shape = document.querySelector('.shape');
	const scrollPosition = window.scrollY;

	// Условие для изменения формы при скролле
	if (scrollPosition > 400) {
		shape.classList.add('expanded');
	} else {
		shape.classList.remove('expanded');
	}
});

// Открытие и закрытие оверлея
const header_btn = document.querySelector('.header_btn');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close');

header_btn.addEventListener('click', () => {
	overlay.style.display = 'flex';
});

close.addEventListener('click', () => {
	overlay.style.display = 'none';
});

// Бургер-меню
const burgerMenu = document.getElementById('burgerMenu');
const overlayBurger = document.querySelector('.overlay-burger');

burgerMenu.addEventListener('click', () => {
	burgerMenu.classList.toggle('open');
	overlayBurger.classList.toggle('show');
});

// Закрытие меню при клике на ссылку
const links = document.querySelectorAll('.header_li');
const btnMob = document.querySelector('.header_btn-mob');

links.forEach(link => {
	link.addEventListener('click', () => {
		burgerMenu.classList.remove('open');
		overlayBurger.classList.remove('show');
	});
});

btnMob.addEventListener('click', () => {
	burgerMenu.classList.remove('open');
	overlayBurger.classList.remove('show');
});

// Показ кнопки при прокрутке
window.onscroll = function () {
	let btn = document.getElementById('scrollToTopBtn');
	let btn1 = document.getElementById('openFormBTN');
	if (
		document.body.scrollTop > 100 ||
		document.documentElement.scrollTop > 100
	) {
		btn.style.display = 'flex';
		btn1.style.display = 'flex';
	} else {
		btn.style.display = 'none';
		btn1.style.display = 'none';
	}
};

// Прокрутка наверх
document.getElementById('scrollToTopBtn').onclick = function () {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Функция для инициализации каждого слайдера
function initSlider(sliderContainer) {
	const sliderWrapper = sliderContainer.querySelector('.slider-wrapper');
	const slides = sliderContainer.querySelectorAll('.slider-item');
	const dotsContainer = sliderContainer.querySelector('.slider-dots');
	let currentSlide = 0;
	const totalSlides = slides.length;

	// Создаем точки для каждого слайдера
	slides.forEach((_, index) => {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		if (index === 0) dot.classList.add('active'); // Первая точка активна по умолчанию
		dotsContainer.appendChild(dot);

		// Добавляем обработчик для переключения на нужный слайд при клике на точку
		dot.addEventListener('click', () => {
			goToSlide(index);
		});
	});

	const dots = dotsContainer.querySelectorAll('.dot');

	// Обновляем активные точки
	function updateDots() {
		dots.forEach((dot, index) => {
			if (index === currentSlide) {
				dot.classList.add('active');
			} else {
				dot.classList.remove('active');
			}
		});
	}

	// Переключение на определенный слайд
	function goToSlide(index) {
		currentSlide = index;
		sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
		updateDots();
	}

	// Функция для автоматического переключения слайдов (по желанию можно включить)
	function autoSlide() {
		currentSlide = (currentSlide + 1) % totalSlides; // Переход к следующему слайду
		sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
		updateDots();
	}

	// Автоматическое переключение каждые 10 секунд (если нужно)
	// setInterval(autoSlide, 10000);

	// Инициализация
	updateDots();
}

// Инициализация всех слайдеров на странице
document.querySelectorAll('.slider').forEach(sliderContainer => {
	initSlider(sliderContainer);
});

// Форма с оверлеем
const overlayBTN = document.querySelector('.overlay_btn');
const openFormBTN = document.getElementById('openFormBTN');
const closeFormBTN = document.querySelector('.close_formBTN');

openFormBTN.addEventListener('click', () => {
	overlayBTN.style.display = 'flex';
});

closeFormBTN.addEventListener('click', () => {
	overlayBTN.style.display = 'none';
});
