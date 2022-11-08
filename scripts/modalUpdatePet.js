
function createModalUpdatePet() {
    const modalTitle = document.getElementById("modal-title")
    modalTitle.innerText = "Atualizar pet"

    const inputList = document.getElementById("input-list")
    const inputPetName = document.createElement("input")
    const inputPetBreed = document.createElement("input")
    const inputPetSpecie = document.createElement("input")
    const inputPetAvatar = document.createElement("input")
    const updatePetButton = document.createElement("button")

    inputPetName.type = "text"
    inputPetName.placeholder = "Nome"
    inputPetBreed.type = "text"
    inputPetBreed.placeholder = "Raça"
    inputPetSpecie.type = "text"
    inputPetSpecie.placeholder = "Espécie"
    inputPetAvatar.type = "text"
    inputPetAvatar.placeholder = "Avatar"
    updatePetButton.innerText = "Atualizar"
    updatePetButton.classList = "button-brand text-1-semibold"

    inputList.append(inputPetName, inputPetBreed, inputPetSpecie, inputPetAvatar, updatePetButton)

    if (inputPetName.value == "" || inputPetBreed.value == "" || inputPetSpecie.value == "" || inputPetAvatar.value == "") {
        updatePetButton.disabled = true
        updatePetButton.classList.add("disabled-button")
    }

    const arrayInputs = [inputPetName, inputPetBreed, inputPetSpecie, inputPetAvatar]
    arrayInputs.forEach(input => {
        input.addEventListener('input', () => {
            if (inputPetName.value == "" || inputPetBreed.value == "" || inputPetSpecie.value == "" || inputPetAvatar.value == "") {
                updatePetButton.disabled = true
                updatePetButton.classList.add("disabled-button")
            }
            else{
                updatePetButton.disabled = false
                updatePetButton.classList.remove("disabled-button")
            }
        })
    })
}
createModalUpdatePet()