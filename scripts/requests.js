import { createToastfySuccess, createToastfyFailed } from "./toastfy.js"



const baseUrl = "https://m2-api-adot-pet.herokuapp.com"

/* ------------------------------------------------------------------ Requests ------------------------------------------------------------------ */
/* Login */
async function loginRequest(body) {
    try {
        const request = await fetch(`${baseUrl}/session/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        const response = await request.json()
        const bodyPage = document.querySelector("body")
        if (request.ok) {
            bodyPage.appendChild(createToastfySuccess('sucesso'))
            localStorage.setItem("kenzieAdopt", response.token)
            setTimeout(() => {
                window.location.href = "/pages/my-profile/profile.html"
            }, 1000)
        } else {
        
            bodyPage.appendChild(createToastfyFailed("Usuário ou senha inválidos"))
        }
    } catch (error) {
        console.log(error)
    }
}

/* Users */
async function createUser(body) {
    try {
        const request = await fetch(`${baseUrl}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
        const response = await request.json()
        const bodyPage = document.querySelector("body")

        if (request.ok) {
            bodyPage.appendChild(createToastfySuccess("Usuário criado com sucesso"))
            setTimeout(() => window.location.href = "../index.html" , 4000)

        } else {
            bodyPage.appendChild(createToastfyFailed("Nao foi possivel criar usuário"))
        }
    } catch (error) {
        console.log(error)
    }
}

async function getAllUsers(token) {
    try {
        const request = await fetch(`${baseUrl}/users`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const response = await request.json()
        console.log(response)

    } catch (error) {
        console.log(error)
    }
}

async function getAllMyProfile(token) {
    try {
        const request = await fetch(`${baseUrl}/users/profile`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const response = await request.json()

        return response

    } catch (error) {
        console.log(error)
    }
}

async function updateProfile(token, body) {
    try {
        const request = await fetch(`${baseUrl}/users/profile`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body)
        })
        const response = await request.json()
        console.log(response)
        const bodyPage = document.querySelector("body")
        if (request.ok) {
            bodyPage.appendChild(createToastfySuccess("Usuário alterado com sucesso"))
            //verificar qual pagina ira
            //setTimeout(() => { window.location.href("/pages/") }, 4000)

        } else {
            bodyPage.appendChild(createToastfyFailed("Nao foi possivel alterar usuário"))
        }

    } catch (error) {
        console.log(error)
    }
}

async function deleteProfile(token) {
    try {
        const request = await fetch(`${baseUrl}/users/profile`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const response = await request.json()
        console.log(response)

    } catch (error) {
        console.log(error)
    }
}

/* Pets */
async function createPet(token, body) {
    try {
        const request = await fetch(`${baseUrl}/pets`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body)
        })
        const response = await request.json()
        const bodyPage = document.querySelector("body")
        if (request.ok) {
            bodyPage.appendChild(createToastfySuccess("Pet criado com sucesso"))
            //verificar qual pagina ira
            //setTimeout(() => { window.location.href("/pages/") }, 4000)

        } else {
            bodyPage.appendChild(createToastfyFailed("Nao foi possivel criar o pet"))
        }

    } catch (error) {
        console.log(error)
    }
}

async function getAllPets() {
    try {
        const request = await fetch(`${baseUrl}/pets`, {
            method: "GET",
        })

        const response = await request.json()

        console.log(response)

        return response

    } catch (error) {
        console.log(error)
    }
}

async function getAllMyPets(token) {
    try {
        const request = await fetch(`${baseUrl}/pets/my_pets`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const response = await request.json()
        return response
        console.log(response)

    } catch (error) {
        console.log(error)
    }
}

async function updatePet(token, id, body) {
    try {
        const request = await fetch(`${baseUrl}/pets/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body)
        })
        const response = await request.json()

        const bodyPage = document.querySelector("body")
        if (request.ok) {
            bodyPage.appendChild(createToastfySuccess("Pet atualizado com sucesso"))
            //verificar qual pagina ira
            //setTimeout(() => { window.location.href("/pages/") }, 4000)

        } else {
            bodyPage.appendChild(createToastfyFailed("Nao foi possivel atualizar o pet"))
        }

    } catch (error) {
        console.log(error)
    }
}

async function deletePetById(token, id) {
    try {
        const request = await fetch(`${baseUrl}/pets/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const response = await request.json()

        const bodyPage = document.querySelector("body")
        if (request.ok) {
            bodyPage.appendChild(createToastfySuccess("Pet deletado com sucesso"))
            //verificar qual pagina ira
            //setTimeout(() => { window.location.href("/pages/") }, 4000)

        } else {
            bodyPage.appendChild(createToastfyFailed("Nao foi possivel deletar o pet"))
        }

    } catch (error) {
        console.log(error)
    }
}

/* Adoptions */
async function createAdoption(token, body) {
    try {
        const request = await fetch(`${baseUrl}/adoptions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body)
        })
        const response = await request.json()
        const bodyPage = document.querySelector("body")
        if (request.ok) {
            bodyPage.appendChild(createToastfySuccess("Adoção criada com sucesso"))
            //verificar qual pagina ira
            //setTimeout(() => { window.location.href("/pages/") }, 4000)

        } else {
            bodyPage.appendChild(createToastfyFailed("Nao foi possivel criar a adoçâo"))
        }

    } catch (error) {
        console.log(error)
    }
}

async function getAllAdoptions(token) {
    try {
        const request = await fetch(`${baseUrl}/adoptions`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const response = await request.json()
        console.log(response)

    } catch (error) {
        console.log(error)
    }
}

async function getAdoptionById(token, id) {
    try {
        const request = await fetch(`${baseUrl}/adoptions/${id}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const response = await request.json()
        console.log(response)

    } catch (error) {
        console.log(error)
    }
}

async function getMyAdoptions(token) {
    try {
        const request = await fetch(`${baseUrl}/adoptions/myAdoptions`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const response = await request.json()
        console.log(response)

    } catch (error) {
        console.log(error)
    }
}

async function updateAdoption(token, id, body) {
    try {
        const request = await fetch(`${baseUrl}/adoptions/updtae/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body)
        })
        const response = await request.json()

        const bodyPage = document.querySelector("body")
        if (request.ok) {
            bodyPage.appendChild(createToastfySuccess("Adoção criada com sucesso"))
            //verificar qual pagina ira
            //setTimeout(() => { window.location.href("/pages/") }, 4000)

        } else {
            bodyPage.appendChild(createToastfyFailed("Nao foi possivel criar a adoçâo"))
        }

    } catch (error) {
        console.log(error)
    }
}

async function deleteAdoption(token, id) {
    try {
        const request = await fetch(`${baseUrl}/adoptions/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const response = await request.json()
        const bodyPage = document.querySelector("body")
        if (request.ok) {
            bodyPage.appendChild(createToastfySuccess("Adoção deletada com sucesso"))
            //verificar qual pagina ira
            //setTimeout(() => { window.location.href("/pages/") }, 4000)

        } else {
            bodyPage.appendChild(createToastfyFailed("Nao foi deletar a adoçâo"))
        }

    } catch (error) {
        console.log(error)
    }
}

/* Export */
export {
    loginRequest,
    createUser,
    getAllUsers,
    getAllMyProfile,
    updateProfile,
    deleteProfile,
    createPet,
    getAllPets,
    getAllMyPets,
    updatePet,
    deletePetById,
    createAdoption,
    getAllAdoptions,
    getAdoptionById,
    getMyAdoptions,
    updateAdoption,
    deleteAdoption
}
