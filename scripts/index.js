/* Import */
import { validateLocal } from "./localStorage.js";
import { createModalLogin } from "./modalLogin.js";
import { changeToDark, checkTheme } from "./darkmode.js";
import { closeModal } from "./closeModal.js";
import { verticalCard } from "./cards.js";

/* Declarations */
const darkButton = document.querySelector(".dark-mode")
const button = document.querySelector("#button-login")

/* Event Listeners */
darkButton.addEventListener("click", () => {
    changeToDark()
})

button.addEventListener("click", () => {
    const modalWrapper = document.querySelector('.modal-wrapper')
    modalWrapper.classList.toggle('show-modal')
    createModalLogin()
})

/* Call to Action */
closeModal()
validateLocal()
checkTheme()
verticalCard()