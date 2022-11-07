
function createModalLogin() {
    let modalTitle = document.getElementById("modal-title")
    modalTitle.innerText = "Login"

    let inputList = document.getElementById("input-list")
    let inputEmail = document.createElement("input")
    let inputPassword = document.createElement("input")
    let loginButton = document.createElement("button")

    inputEmail.type = "email"
    inputEmail.placeholder = "E-mail"
    inputPassword.type = "password"
    inputPassword.placeholder = "Senha"
    loginButton.innerText = "Login"
    loginButton.classList = "button-brand text-1-semibold"

    inputList.append(inputEmail, inputPassword, loginButton)

    let modalFooterText = document.getElementById("modal-footer-text")
    modalFooterText.innerHTML = `Já tem cadastro? <a href="">Clique aqui</a> para logar`

    if (inputEmail.value == "" || inputPassword.value == "") {
        loginButton.disabled = true
        loginButton.classList.add("disabled-button")
    }

    let arrayInputs = [inputEmail, inputPassword]
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
}
createModalLogin()