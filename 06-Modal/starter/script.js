'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openClick = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeClick = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openClick);
}

btnCloseModal.addEventListener('click', closeClick);

document.addEventListener('keydown', function (x) {
  if (x.key === 'Escape') closeClick();
});
