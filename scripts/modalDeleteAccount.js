
function createModalDeleteAccount() {
    let modalTitle = document.getElementById("modal-title")
    modalTitle.innerText = "Deseja mesmo deletar sua conta?"

    let inputList = document.getElementById("input-list")
    let neverMindButton = document.createElement("button")
    let deleteAccountButton = document.createElement("button")

    neverMindButton.innerText = "Não desejo deletar minha conta"
    neverMindButton.classList = "button-brand text-1-semibold"
    deleteAccountButton.innerText = "Quero deletar minha conta"
    deleteAccountButton.classList = ""
}
createModalDeleteAccount()