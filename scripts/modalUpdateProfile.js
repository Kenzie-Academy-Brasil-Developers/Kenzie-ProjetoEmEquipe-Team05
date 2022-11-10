/* Export */
export {createModalUpdateProfile}

/* Import */
import { updateProfile } from "./requests.js"

/* Code */
function createModalUpdateProfile() {
    const modalTitle = document.getElementById("modal-title")
    modalTitle.innerText = "Atualizar perfil"

    const inputList = document.getElementById("input-list")
    const inputUsername = document.createElement("input")
    const inputAvatar = document.createElement("input")
    const updateButton = document.createElement("button")

    inputList.innerHTML = ''

    inputUsername.type = "text" 
    inputUsername.placeholder = "Nome"
    inputAvatar.type = "text"
    inputAvatar.placeholder = "Avatar"
    updateButton.innerText = "Atualizar"
    updateButton.classList = "button-brand text-1-semibold"
    
    inputList.append(inputUsername, inputAvatar, updateButton)

    updateButton.addEventListener('click', async (e) => {
        e.preventDefault()
        const newUserInfo = {
            avatar_url: inputAvatar.value,
            name: inputUsername.value,
        }
       await updateProfile(localStorage.getItem("kenzieAdopt"), newUserInfo)
    })
}