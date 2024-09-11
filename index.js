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
