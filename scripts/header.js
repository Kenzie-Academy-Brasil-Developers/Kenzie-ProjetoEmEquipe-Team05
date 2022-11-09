import { getAllMyProfile } from "./requests.js"


/* Declarations */
const local = localStorage.getItem('kenzieAdopt')

/* Check */
if (local) {
    console.log('oi')
    updateUser(local)
}

/* Code */
async function updateUser(uuid) {
    const headerContent = document.querySelector('.header-content')
    const headerFooter = document.querySelector('.header-footer')
    const profileImage = document.querySelectorAll('.profile-img')

    const elementArr = await getAllMyProfile(uuid)
    console.log(elementArr)

    headerContent.innerHTML = ''
    profileImage.forEach( e => {
        e.src = elementArr.avatar_url
    })

    /* Create Elements */
    const title = document.createElement('h1')
    const info = document.createElement('div')
    const name = document.createElement('p')
    const email = document.createElement('p')

    /* Appends */
    headerContent.append(title, info)
    info.append(name, email)

    /* Classes */
    title.className = 'title-1-bold'
    info.className = 'header-info'
    
    name.className = 'text-1-semibold'
    email.className = 'text-1-semibold'

    /* Values */
    title.innerText = 'Dados Pessoais'
    title.style.color = "var(--color-brand-3)"

    name.innerHTML = `<span class="text-1-bold" style="color: var(--color-brand-3">Nome: </span> <span>${elementArr.name}</span>`
    email.innerHTML = `<span class="text-1-bold" style="color: var(--color-brand-3">E-mail: </span> <span>${elementArr.email}</span>`

    /* Buttons */
    const editProfile = document.createElement('button')
    const logout = document.createElement('img')

    headerFooter.append(editProfile, logout)

    editProfile.className = 'button-brand'
    logout.id = 'logout-btn'

    editProfile.innerText = 'Editar Perfil'
    logout.src = '../../src/account logout_.svg'
}