document.querySelector('.catalog__item-add').onclick = function () {
	let a = document.querySelector('.catalog__item-add');
	let b = document.querySelector('.catalog__item-added');
	a.style.display = 'none';
	b.style.display = 'block';
}

document.querySelector('.catalog__item-added').onclick = function () {
	let a = document.querySelector('.catalog__item-add');
	let b = document.querySelector('.catalog__item-added');
	a.style.display = 'block';
	b.style.display = 'none';
}