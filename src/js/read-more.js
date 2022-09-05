(() => {
  const refs = {
    openModalBtn: document.querySelector('[read-modal-open]'),
    closeModalBtn: document.querySelector('[read-modal-close]'),
    modal: document.querySelector('[read-data-modall]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('read-is-hidden');
  }
})();
