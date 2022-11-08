import { validateLocal } from "./localStorage.js";
import {getAllPets} from "./requests.js"
import {createModalLogin} from "./modalLogin.js"

validateLocal()

async function callGetAllPets (){
const pets = await getAllPets()
pets.forEach(element => {
    const ul = document.querySelector("#ul-pets")
    const liPets = document.createElement("li")
    const imgPets = document.createElement("img")
    const headerLi = document.createElement("div")
    const h2NamePet = document.createElement("h2")
    const pSpecie = document.createElement("p")

    liPets.classList.add("card-vertical")
    imgPets.classList.add("card-img")
    headerLi.classList.add("card-body")

    imgPets.src = element.avatar_url
    h2NamePet.innerText = element.name
    pSpecie.innerText = element.species

    headerLi.append(h2NamePet,pSpecie)
    liPets.append(imgPets,headerLi)
    ul.appendChild(liPets)

});
}

callGetAllPets()

function callModalLogin(){
    
const button = document.querySelector("#button-login")
    button.addEventListener("click", ()=>{
    
         const modalWrapper = document.querySelector('.modal-wrapper')
         modalWrapper.classList.toggle('show-modal')
         createModalLogin()
    })
    }

callModalLogin()