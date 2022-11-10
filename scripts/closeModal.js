function closeModal() {
    const closeModalButton = document.getElementById("close-modal")
    const modal = document.getElementById("modal")

    closeModalButton.addEventListener('click', () => {
        modal.classList.toggle("show-modal")
    })
}

export { closeModal }