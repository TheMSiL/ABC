window.addEventListener('scroll', function () {
	const shape = document.querySelector('.shape');
	const scrollPosition = window.scrollY;

	// Условие для изменения формы при скролле
	if (scrollPosition > 400) {
		// Число можно изменить по своему усмотрению
		shape.classList.add('expanded');
	} else {
		shape.classList.remove('expanded');
	}
});

const header_btn = document.querySelector('.header_btn');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close');

header_btn.addEventListener('click', () => {
	overlay.style.display = 'flex';
});

close.addEventListener('click', () => {
	overlay.style.display = 'none';
});

const burgerMenu = document.getElementById('burgerMenu');
const overlayBurger = document.querySelector('.overlay-burger');

burgerMenu.addEventListener('click', () => {
	burgerMenu.classList.toggle('open');
	overlayBurger.classList.toggle('show');
});

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

// Показываем кнопку при прокрутке вниз
window.onscroll = function () {
	let btn = document.getElementById('scrollToTopBtn');
	if (
		document.body.scrollTop > 100 ||
		document.documentElement.scrollTop > 100
	) {
		btn.style.display = 'flex';
	} else {
		btn.style.display = 'none';
	}
};

// Прокручиваем страницу наверх при клике на кнопку
document.getElementById('scrollToTopBtn').onclick = function () {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};
