import { horizontalCard } from "../../scripts/cards.js";
import { getAllMyPets, getAllMyProfile } from "../../scripts/requests.js";

const getmyPets = await getAllMyPets(localStorage.getItem('user'))

getmyPets.forEach(element => {
    horizontalCard(element)
})

updateProfile()

async function updateProfile() {
    const myProfile = await getAllMyProfile(localStorage.getItem('user'))
    console.log(myProfile)
    const userImg = document.getElementById('profile-img')
    const userName = document.getElementById('profile-username')
    const userEmail = document.getElementById('profile-email')
    const userBirth = document.getElementById('profile-birthdate')

    userImg.src = myProfile.avatar_url
    userName.innerText = myProfile.name
    userEmail.innerText = myProfile.email
    /* userBirth.innerText = myProfile.birth */
}