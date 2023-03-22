(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-feedback-open]'),
    closeModalBtn: document.querySelector('[data-modal-feedback-close]'),
    modal: document.querySelector('[data-modal-feedback]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('visually-hidden');
  }
})();
