import { validateLocal } from "./localStorage.js";
import {getAllPets} from "./requests.js"
import {createModalLogin} from "./modalLogin.js"
import { filterEspecies } from "./filter.js";

validateLocal()

export function callGetAllPets (arr){
arr.forEach(element => {
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
const pets = await getAllPets()
callGetAllPets(pets)

async function callFilter(){
    const token = localStorage.getItem('token')
    const newToken = JSON.parse(token)
    const arr = await getAllPets(newToken.token) 
    const seta = document.querySelector(".setaSelect")
    seta.addEventListener("click",()=>{
        filterEspecies(arr)
    })
}
function callModalLogin(){
    
const button = document.querySelector("#button-login")
    button.addEventListener("click", ()=>{
    
         const modalWrapper = document.querySelector('.modal-wrapper')
         modalWrapper.classList.toggle('show-modal')
         createModalLogin()
    })
}
callFilter()
callModalLogin()