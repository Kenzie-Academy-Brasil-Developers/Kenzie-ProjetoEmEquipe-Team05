
function createModalUpdateProfile() {
    const modalTitle = document.getElementById("modal-title")
    modalTitle.innerText = "Atualizar perfil"

    const inputList = document.getElementById("input-list")
    const inputUsername = document.createElement("input")
    const inputEmail = document.createElement("input")
    const inputAvatar = document.createElement("input")
    const registerButton = document.createElement("button")

    inputUsername.type = "text" 
    inputUsername.placeholder = "Nome"
    inputEmail.type = "email"
    inputEmail.placeholder = "E-mail"
    inputAvatar.type = "text"
    inputAvatar.placeholder = "Avatar"
    registerButton.innerText = "Atualizar"
    registerButton.classList = "button-brand text-1-semibold"
    
    inputList.append(inputUsername, inputEmail, inputAvatar, registerButton)
}
createModalUpdateProfile()