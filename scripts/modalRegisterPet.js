
function createModalRegisterPet() {
    const modalTitle = document.getElementById("modal-title")
    modalTitle.innerText = "Cadastrar pet"

    const inputList = document.getElementById("input-list")
    const inputPetName = document.createElement("input")
    const inputPetBreed = document.createElement("input")
    const inputPetAvatar = document.createElement("input")
    const registerPetButton = document.createElement("button")

    inputPetName.type = "text"
    inputPetName.placeholder = "Nome"
    inputPetBreed.type = "text"
    inputPetBreed.placeholder = "Raça"
    inputPetAvatar.type = "text"
    inputPetAvatar.placeholder = "Avatar"
    registerPetButton.innerText = "Cadastrar"
    registerPetButton.classList = "button-brand text-1-semibold"

    inputList.append(inputPetName, inputPetBreed, inputPetAvatar, registerPetButton)

    if (inputPetName.value == "" || inputPetBreed.value == "" || inputPetAvatar.value == "") {
        registerPetButton.disabled = true
        registerPetButton.classList.add("disabled-button")
    }

    const arrayInputs = [inputPetName, inputPetBreed, inputPetAvatar]
    arrayInputs.forEach(input => {
        input.addEventListener('input', () => {
            if (inputPetName.value == "" || inputPetBreed.value == "" || inputPetAvatar.value == "") {
                registerPetButton.disabled = true
                registerPetButton.classList.add("disabled-button")
            }
            else{
                registerPetButton.disabled = false
                registerPetButton.classList.remove("disabled-button")
            }
        })
    })
}
createModalRegisterPet()