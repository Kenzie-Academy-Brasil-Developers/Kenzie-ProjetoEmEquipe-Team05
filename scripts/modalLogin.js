import { loginRequest } from "./requests.js"
export {createModalLogin}

function createModalLogin() {
    const modalTitle = document.getElementById("modal-title")
    modalTitle.innerText = "Login"

    const inputList = document.getElementById("input-list")
    const inputEmail = document.createElement("input")
    const inputPassword = document.createElement("input")
    const loginButton = document.createElement("button")

    inputEmail.type = "email"
    inputEmail.placeholder = "E-mail"
    inputPassword.type = "password"
    inputPassword.placeholder = "Senha"
    loginButton.innerText = "Login"
    loginButton.classList = "button-brand text-1-semibold"

    inputList.append(inputEmail, inputPassword, loginButton)

    const modalFooterText = document.getElementById("modal-footer-text")
    modalFooterText.innerHTML = `Já tem cadastro? <a href="">Clique aqui</a> para logar`

    if (inputEmail.value == "" || inputPassword.value == "") {
        loginButton.disabled = true
        loginButton.classList.add("disabled-button")
    }

    const arrayInputs = [inputEmail, inputPassword]
    arrayInputs.forEach(input => {
        input.addEventListener('input', () => {
            if (inputEmail.value == "" || inputPassword.value == "") {
                loginButton.disabled = true
                loginButton.classList.add("disabled-button")
            }
            else{
                loginButton.disabled = false
                loginButton.classList.remove("disabled-button")
            }
        })
    })
    loginButton.addEventListener('click', (e) => {
        e.preventDefault()
        const userInfo = {
            email: inputEmail.value,
            password: inputPassword.value
        }
        loginRequest(userInfo)
    })
}
createModalLogin()
