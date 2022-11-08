
function closeModal() {
    const closeModalButton = document.getElementById("close-modal")
    const modal = document.getElementById("modal")
    const modalWrapper = document.querySelector('.modal-wrapper')

    closeModalButton.addEventListener('click', () => {
        
    modalWrapper.classList.toggle('show-modal')
    })
}
closeModal()