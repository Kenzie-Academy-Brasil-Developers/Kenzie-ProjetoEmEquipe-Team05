/* Import */
import { validateLocal } from "./localStorage.js";
import {getAllPets} from "./requests.js"
import {createModalLogin} from "./modalLogin.js"
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
/* Call to Action */
closeModal()
validateLocal()
function callModalLogin(){
    
const button = document.querySelector("#button-login")
    button.addEventListener("click", ()=>{
    
         const modalWrapper = document.querySelector('.modal-wrapper')
         modalWrapper.classList.toggle('show-modal')
         createModalLogin()
    })
}
callModalLogin()
checkTheme()
const pets = await getAllPets() 
verticalCard(pets)
filterEspecies(pets)

