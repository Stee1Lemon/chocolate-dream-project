(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-thank-open]'),
    closeModalBtn: document.querySelector('[data-modal-thank-close]'),
    modal: document.querySelector('[data-modal-thank]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('visually-hidden');
  }
})();
