export { createModalDeleteAccount }

function createModalDeleteAccount() {
    const modalTitle = document.getElementById("modal-title")
    modalTitle.innerText = "Deseja mesmo deletar sua conta?"

    const inputList = document.getElementById("input-list")
    const neverMindButton = document.createElement("button")
    const deleteAccountButton = document.createElement("button")

    neverMindButton.innerText = "Não desejo deletar minha conta"
    neverMindButton.classList = "button-brand text-1-semibold"
    deleteAccountButton.innerText = "Quero deletar minha conta"
    deleteAccountButton.classList = "button-alert-outline"
    inputList.append(neverMindButton, deleteAccountButton)
}