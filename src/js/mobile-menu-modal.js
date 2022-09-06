(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-menu-open]"),
        closeModalBtn: document.querySelector("[data-menu-close]"),
        modal: document.querySelector("[data-menu-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("data-hidden");
    }
})();