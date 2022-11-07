
function createRegisterModal() {
    let modalTitle = document.getElementById("modal-title")
    modalTitle.innerText = "Cadastrar"

    let inputList = document.getElementById("input-list")
    let inputUsername = document.createElement("input")
    let inputEmail = document.createElement("input")
    let inputPassword = document.createElement("input")
    let inputAvatar = document.createElement("input")
    let registerButton = document.createElement("button")

    inputUsername.type = "text" 
    inputUsername.placeholder = "Nome"
    inputEmail.type = "email"
    inputEmail.placeholder = "E-mail"
    inputPassword.type = "password"
    inputPassword.placeholder = "Senha"
    inputAvatar.type = "text"
    inputAvatar.placeholder = "Avatar?"
    registerButton.innerText = "Cadastrar"
    registerButton.classList = "button-brand text-1-semibold"

    inputList.append(inputUsername, inputEmail, inputPassword, inputAvatar, registerButton)

    let modalFooterText = document.getElementById("modal-footer-text")
    modalFooterText.innerHTML = `Não tem cadastro? <a href="">Clique aqui</a> para se cadastrar`


    if (inputUsername.value == "" || inputEmail.value == "" || inputPassword.value == "") {
        registerButton.disabled = true
        registerButton.classList.add("disabled-button")
    }

    let arrayInputs = [inputUsername, inputEmail, inputPassword]
    arrayInputs.forEach(input => {
        input.addEventListener('input', () => {
            if (inputUsername.value == "" || inputEmail.value == "" || inputPassword.value == "") {
                registerButton.disabled = true
                registerButton.classList.add("disabled-button")
            }
            else{
                registerButton.disabled == false
                registerButton.classList.remove("disabled-button")
            }
        })
    })
}
createRegisterModal()

