import { horizontalCard } from "../../scripts/cards.js";
import { getAllMyPets, getAllMyProfile } from "../../scripts/requests.js";
import { createModalUpdateProfile } from "../../scripts/modalUpdateProfile.js"

const getmyPets = await getAllMyPets(localStorage.getItem('kenzieAdopt'))

getmyPets.forEach(element => {
    horizontalCard(element)
})

updateProfile()

async function updateProfile() {
    const myProfile = await getAllMyProfile(localStorage.getItem('kenzieAdopt'))
    const userImg = document.getElementById('profile-img')
    const userName = document.getElementById('profile-username')
    const userEmail = document.getElementById('profile-email')

    userImg.src = myProfile.avatar_url
    userName.innerText = myProfile.name
    userEmail.innerText = myProfile.email
}

function updateUser() {
    const updateUserButton = document.getElementById("update-user")
    updateUserButton.addEventListener('click', (e) => {
        e.preventDefault()
        const inputList = document.getElementById("input-list")
        inputList.innerHTML = ""
        const modal = document.getElementById("modal")
        modal.classList.toggle('show-modal')
        createModalUpdateProfile()
    })
}
updateUser()