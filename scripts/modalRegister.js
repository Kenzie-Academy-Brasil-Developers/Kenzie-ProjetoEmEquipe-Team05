/* Export */
export  { createRegisterModal }

/* Import */
import { createUser } from "./requests.js"
import { createModalLogin } from "./modalLogin.js"

/* Code */
function createRegisterModal() {
    const modalTitle = document.getElementById("modal-title")
    modalTitle.innerText = "Cadastrar"

    const inputList = document.getElementById("input-list")
    const inputUsername = document.createElement("input")
    const inputEmail = document.createElement("input")
    const inputPassword = document.createElement("input")
    const inputAvatar = document.createElement("input")
    const registerButton = document.createElement("button")

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
 
    const modalFooterText = document.getElementById("modal-footer-text")
    modalFooterText.innerHTML = `Já tem cadastro? <a href="" id="anchor-click">Clique aqui</a> para logar`

    const anchor = document.getElementById("anchor-click")
    anchor.addEventListener('click', (e) => {
        e.preventDefault()
        inputList.innerHTML = ""
        createModalLogin()
    })

    if (inputUsername.value == "" || inputEmail.value == "" || inputPassword.value == "") {
        registerButton.disabled = true
        registerButton.classList.add("disabled-button")
    }

    const arrayInputs = [inputUsername, inputEmail, inputPassword]
    arrayInputs.forEach(input => {
        input.addEventListener('input', () => {
            if (inputUsername.value == "" || inputEmail.value == "" || inputPassword.value == "") {
                registerButton.disabled = true
                registerButton.classList.add("disabled-button")
            }
            else{
                registerButton.disabled = false
                registerButton.classList.remove("disabled-button")
            }
        })
    })
    console.log(registerButton)
    registerButton.addEventListener('click', (e) => {
        e.preventDefault()
        const userInfo = {
            name: inputUsername.value,
            email: inputEmail.value,
            password: inputPassword.value,
            avatar_url: inputAvatar.value
        }
        createUser(userInfo)
    })
}