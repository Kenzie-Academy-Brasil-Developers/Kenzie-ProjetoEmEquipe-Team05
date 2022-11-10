import { changeToDark, checkTheme } from "./darkmode.js"
import { createModalLogin } from "./modalLogin.js"
import { createRegisterModal } from "./modalRegister.js"

const local = localStorage.getItem('kenzieAdopt')

export function renewEventListeners() {
    const closeHeader = document.getElementById("close-btn")
    const darkButton = document.querySelector(".dark-mode")
    const buttonLogin = document.getElementById("button-login")
    const buttonRegister = document.getElementById("button-register")

    
    darkButton.addEventListener("click", () => {
        changeToDark()
    })

    closeHeader.addEventListener("click", () => {
        const header = document.querySelector('.header')
        header.classList.toggle('header-close')
    })

    if(!local || local == '') {
        buttonLogin.addEventListener("click", () => {
            const modalWrapper = document.querySelector('.modal-wrapper')
            modalWrapper.classList.toggle('show-modal')
            createModalLogin()
        })
    
        buttonRegister.addEventListener("click", () => {
            const modalWrapper = document.querySelector('.modal-wrapper')
            modalWrapper.classList.toggle('show-modal')
            createRegisterModal()
        })
    } else {
        checkTheme()
    }
}