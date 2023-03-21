// Select required elements from the DOM
const modal = document.querySelector('#modal');
const body = document.querySelector('body');

const showModal = function (e) {
  modal.classList.toggle('hidden');

  if (!modal.classList.contains('hidden')) {
    // Disable scroll
    body.style.overflow = 'hidden';
  } else {
    // Enable scroll
    body.style.overflow = 'auto';
  }
};
