import { validateLocal } from "./localStorage.js";
import {getAllPets} from "./requests.js"
import {createModalLogin} from "./modalLogin.js"
import { createToastfyFailed, createToastfySuccess } from "./toastfy.js";
import { createAdoption } from "./requests.js"

validateLocal()

async function callGetAllPets (){
const pets = await getAllPets()
pets.forEach(element => {
    console.log(element)
    const ul = document.querySelector("#ul-pets")
    const liPets = document.createElement("li")
    const imgPets = document.createElement("img")
    const headerLi = document.createElement("div")
    const h2NamePet = document.createElement("h2")
    const pSpecie = document.createElement("p")

    liPets.classList.add("card-vertical")
    imgPets.classList.add("card-header-vertical")
    headerLi.classList.add("card-body")

    imgPets.src = element.avatar_url
    h2NamePet.innerText = element.name
    pSpecie.innerText = element.species

    headerLi.append(h2NamePet,pSpecie)
    
    const user = localStorage.getItem("kenzieAdopt")
    if (user) {
        const btnAdopt = document.createElement("button")
        btnAdopt.classList.add("button-brand-2")
        btnAdopt.innerText = "Adotar"
        headerLi.append(btnAdopt)

        btnAdopt.addEventListener('click', (e) => {
            e.preventDefault()
            const petId = {
                pet_id: element.id
            }
            createAdoption(localStorage.getItem("kenzieAdopt"), petId)
        })
    }

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

createToastfySuccess('xxx')
createToastfyFailed('xxx')