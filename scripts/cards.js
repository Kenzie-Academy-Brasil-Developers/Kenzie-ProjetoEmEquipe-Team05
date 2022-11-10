import { createModalUpdatePet } from "./modalUpdatePet.js"
import { createAdoption, getAllPets } from "./requests.js";

async function renderCards() {
    const wrapper = document.querySelector('.card-wrapper')
    wrapper.innerHTML = ''
    const getmyPets = await getAllMyPets(localStorage.getItem('kenzieAdopt'))
    await getmyPets.forEach(element => {
        horizontalCard(element)
    })
}


async function verticalCard() {
    const pets = await getAllPets()
    pets.forEach(element => {
        const ul = document.querySelector("#ul-pets")
        const liPets = document.createElement("li")
        const imgPets = document.createElement("img")
        const headerLi = document.createElement("div")
        const h2NamePet = document.createElement("h2")
        const pSpecie = document.createElement("p")

        liPets.classList.add("card-vertical")
        imgPets.classList.add("card-header-vertical")
        headerLi.classList.add("card-body")
    

       
        imgPets.src =  element.avatar_url
        h2NamePet.innerText = element.name
        pSpecie.innerText = element.species

        headerLi.append(h2NamePet, pSpecie)

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

        liPets.append(imgPets, headerLi)
        ul.appendChild(liPets)
    });
}

function horizontalCard(element) {
    const wrapper = document.querySelector('.card-wrapper')

    const card = document.createElement('div')
    card.className = 'card-horizontal'

    wrapper.appendChild(card)

    const cardHeader = document.createElement('img')
    cardHeader.className = 'card-header-horizontal'
    const cardContent = document.createElement('div')
    cardContent.className = 'card-content'

    card.append(cardHeader, cardContent)

    const cardBody = document.createElement('div')
    cardBody.className = 'card-body'
    const cardFooter = document.createElement('div')
    cardFooter.className = 'card-footer-horizontal'

    cardContent.append(cardBody, cardFooter)

    /* Card Header */
    cardHeader.src = element.avatar_url

    /* Card Body */
    const name = document.createElement('p')
    name.className = 'text-2-bold'
    name.innerHTML = `<span style="color: var(--color-brand-3);">Nome: </span> <span> ${element.name} </span>`

    const specie = document.createElement('p')
    specie.className = 'text-2-bold'
    specie.innerHTML = `<span style="color: var(--color-brand-3);">Espécie: </span> <span> ${element.species} </span>`

    const adoptable = document.createElement('p')
    adoptable.className = 'text-2-bold'
    adoptable.innerHTML = `<span style="color: var(--color-brand-3);">Adotável: </span> <span> ${checkAdopt(element.available_for_adoption)} </span>`

    cardBody.append(name, specie, adoptable)

    const update = document.createElement('button')
    update.className = 'button-brand'
    update.innerText = 'Atualizar'

    update.addEventListener('click', (e) => {
        e.preventDefault()
        const inputList = document.getElementById("input-list")
        inputList.innerHTML = ""
        const modal = document.getElementById("modal")
        modal.classList.toggle('show-modal')
        createModalUpdatePet(element.id)
    })
    cardFooter.appendChild(update)
}

function checkAdopt(boolean) {
    if (boolean == true) {
        return "Sim"
    } else {
        return "Não"
    }
}

export {
    horizontalCard,
    verticalCard,
    renderCards
}