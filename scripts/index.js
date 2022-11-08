import { renderCardsPets } from "./cards.js";
import { validateLocal } from "./localStorage.js";
import { createModalLogin } from "./modalLogin.js";
import { getAllPets } from "./requests.js";
validateLocal()
const button = document.querySelector(".button-brand")
button.addEventListener("click", () =>{
    const modalWrapper = document.querySelector('.modal-wrapper')
    modalWrapper.classList.toggle('show-modal')
    createModalLogin()
})
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc5MTU5NDAsImV4cCI6MTY2ODUyMDc0MCwic3ViIjoiZTgxMDk0OGUtM2E4OC00NDk4LTk2MmMtNDU3MzVjZjllMmI4In0.VqPAc4eXpUMLrHIokiDp_iMjYQI6xT5fKMPZavvG4vo" 
const arr = await getAllPets(token)
arr.forEach(element => {
    renderCardsPets(element)
});