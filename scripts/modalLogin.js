/* Export */
export { createModalLogin }

/* Import */
import { loginRequest } from "./requests.js"
import { createRegisterModal } from "./modalRegister.js"

/* Code */
function createModalLogin() {
    /* Declarations */
    const inputList = document.getElementById("input-list")
    const modalTitle = document.getElementById("modal-title")
    const modalFooterText = document.getElementById("modal-footer-text")

    /* Generate Input List */
    const inputEmail = document.createElement("input")
    const inputPassword = document.createElement("input")
    const loginButton = document.createElement("button")

    /* Clear Input List */
    inputList.innerHTML = ""

    /* Modal Title */
    modalTitle.innerText = "Login"

    /* Modal Footer */
    modalFooterText.innerHTML = `Não tem cadastro? <a href="" id="anchor-click">Clique aqui</a> para se cadastrar`

    /* Input List Configuration */
    inputEmail.type = "email"
    inputEmail.placeholder = "E-mail"
    inputPassword.type = "password"
    inputPassword.placeholder = "Senha"
    loginButton.innerText = "Login"
    loginButton.classList = "button-brand text-1-semibold"

    /* Append Childs to InputList */
    inputList.append(inputEmail, inputPassword, loginButton)

    /* Event Listener to Anchor */
    const anchor = document.getElementById("anchor-click")
    anchor.addEventListener('click', (e) => {
        e.preventDefault()
        inputList.innerHTML = ""
        createRegisterModal()
    })

    /* Set Button into disabled mode */
    if (inputEmail.value == "" || inputPassword.value == "") {
        loginButton.disabled = true
        loginButton.classList.add("disabled-button")
    }

    /* Add Event Listener to Inputs */
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

    /* Add Event Listener to Submit Button */
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