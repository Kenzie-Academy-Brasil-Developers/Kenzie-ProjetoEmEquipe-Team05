import { validateLocal } from "./localStorage.js";
import { getAllPets } from "./requests.js"
import { checkTheme } from "./darkmode.js";
import { closeModal } from "./closeModal.js";
import { verticalCard } from "./cards.js";
import { filterEspecies } from "./filter.js";
import { updateHeader } from "./header.js";
import { renewEventListeners } from "./eventListenersRenew.js";

const openHeader = document.getElementById("open-header-btn")
const local = localStorage.getItem('kenzieAdopt')
const pets = await getAllPets()

if(local && local !== '') {
    await updateHeader(local)
}
closeModal()
validateLocal()
checkTheme()
filterEspecies(pets)
verticalCard(pets)
renewEventListeners()

openHeader.addEventListener("click", () => {
    const header = document.querySelector('.header')
    header.classList.toggle('header-close')
})