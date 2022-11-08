
function closeModal() {
    const closeModalButton = document.getElementById("close-modal")
    const modal = document.getElementById("modal")

    closeModalButton.addEventListener('click', () => {
        modal.style.display = "none"
    })
}
closeModal()