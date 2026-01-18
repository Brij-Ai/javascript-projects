'use strict';
const modal = document.querySelector('.modal');
// console.log(modal);
const overlay = document.querySelector('.overlay');
// console.log(overlay);
const close_modal = document.querySelector('.close-modal');
const show_modal = document.querySelectorAll('.show-modal'); //querySelectorAll for all class with same name

const openModal = function () {
  // console.log('button clicked !');
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};
const closeModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

for (let i = 0; i < show_modal.length; i++) {
  show_modal[i].addEventListener('click', openModal);
}

close_modal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
