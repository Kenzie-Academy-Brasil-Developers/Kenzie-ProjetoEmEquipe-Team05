/* Import */
import { validateLocal } from "./localStorage.js";
import { getAllPets } from "./requests.js"
import { createModalLogin } from "./modalLogin.js"
import { changeToDark, checkTheme } from "./darkmode.js";
import { closeModal } from "./closeModal.js";
import { verticalCard } from "./cards.js";
import { createRegisterModal } from "./modalRegister.js";
import { filterEspecies } from "./filter.js";

/* Declarations */
const darkButton = document.querySelector(".dark-mode")
const buttonLogin = document.querySelector("#button-login")
const buttonRegister = document.getElementById("button-register")
const openHeader = document.getElementById("open-header-btn")
const closeHeader = document.getElementById("close-header")
const pets = await getAllPets()

/* Call to Action */
closeModal()
validateLocal()
checkTheme()
filterEspecies(pets)
verticalCard(pets)

/* Event Listeners */
darkButton.addEventListener("click", () => {
    changeToDark()
})

buttonLogin.addEventListener("click", () => {
    const modalWrapper = document.querySelector('.modal-wrapper')
    modalWrapper.classList.toggle('show-modal')
    createModalLogin()
})

openHeader.addEventListener("click", () => {
    const header = document.querySelector('.header')
    header.classList.toggle('header-close')
})

closeHeader.addEventListener("click", () => {
    const header = document.querySelector('.header')
    header.classList.toggle('header-close')
})

buttonRegister.addEventListener("click", () => {
    const modalWrapper = document.querySelector('.modal-wrapper')
    modalWrapper.classList.toggle('show-modal')
    createRegisterModal()
})