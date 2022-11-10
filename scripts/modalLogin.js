

import { loginRequest } from "./requests.js"
import { createRegisterModal } from "./modalRegister.js"

function createModalLogin() {
    const inputList = document.getElementById("input-list")
    const modalTitle = document.getElementById("modal-title")
    const modalFooterText = document.getElementById("modal-footer-text")

    const inputEmail = document.createElement("input")
    const inputPassword = document.createElement("input")
    const loginButton = document.createElement("button")

    inputList.innerHTML = ""

    modalTitle.innerText = "Login"

    modalFooterText.innerHTML = `Não tem cadastro? <a href="" id="anchor-click">Clique aqui</a> para se cadastrar`

    inputEmail.type = "email"
    inputEmail.placeholder = "E-mail"
    inputPassword.type = "password"
    inputPassword.placeholder = "Senha"
    loginButton.innerText = "Login"
    loginButton.classList = "button-brand text-1-semibold"

    inputList.append(inputEmail, inputPassword, loginButton)

    const anchor = document.getElementById("anchor-click")
    anchor.addEventListener('click', (e) => {
        e.preventDefault()
        inputList.innerHTML = ""
        createRegisterModal()
    })

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
            else {
                loginButton.disabled = false
                loginButton.classList.remove("disabled-button")
            }
        })
    })

    loginButton.addEventListener('click', async (e) => {
        e.preventDefault()
        const modalWrapper = document.querySelector('.modal-wrapper')
        const userInfo = {
            email: inputEmail.value,
            password: inputPassword.value
        }
        await loginRequest(userInfo)
        modalWrapper.classList.toggle('show-modal')
    })

    addEventListener('storage', e => {
        console.log('storage')
    })
}

export { createModalLogin }