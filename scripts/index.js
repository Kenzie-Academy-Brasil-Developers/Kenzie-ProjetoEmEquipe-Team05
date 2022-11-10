/* Import */
import { validateLocal } from "./localStorage.js";
import { getAllPets } from "./requests.js"
import { createModalLogin } from "./modalLogin.js"
import { changeToDark, checkTheme } from "./darkmode.js";
import { closeModal } from "./closeModal.js";
import { verticalCard } from "./cards.js";
import { createRegisterModal } from "./modalRegister.js";
import { filterEspecies } from "./filter.js";
import { updateHeader } from "./header.js";
import { renewEventListeners } from "./eventListenersRenew.js";

/* Declarations */
const openHeader = document.getElementById("open-header-btn")
const local = localStorage.getItem('kenzieAdopt')
const pets = await getAllPets()

/* Call to Action */
if(local && local !== '') {
    await updateHeader(local)
}
closeModal()
validateLocal()
checkTheme()
filterEspecies(pets)
verticalCard(pets)
renewEventListeners()


/* Event Listeners */
openHeader.addEventListener("click", () => {
    const header = document.querySelector('.header')
    header.classList.toggle('header-close')
})