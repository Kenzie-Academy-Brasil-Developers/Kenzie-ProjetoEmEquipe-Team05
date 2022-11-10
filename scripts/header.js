export { updateHeader, resetHeader }

import { verticalCard } from "./cards.js"
import { changeToDark, checkTheme } from "./darkmode.js"
import { createModalLogin } from "./modalLogin.js"
import { createRegisterModal } from "./modalRegister.js"
import { createModalUpdateProfile } from "./modalUpdateProfile.js"
import { getAllMyProfile, getAllPets } from "./requests.js"
import { createToastfyFailed } from "./toastfy.js"

/* Code */
async function updateHeader(uuid) {
  const headerContent = document.querySelector('.header-content')
  const headerFooter = document.querySelector('.header-footer')
  const profileImage = document.querySelectorAll('.profile-img')

  const elementArr = await getAllMyProfile(uuid)

  headerContent.innerHTML = ''
  profileImage.forEach(e => {
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

  if (!window.location.href.includes('profile.html')) {
    const myPets = document.createElement('a')
    myPets.className = 'button-brand'
    myPets.href = ''
    myPets.addEventListener('click', e => {
      e.preventDefault()
      window.location.assign('/pages/my-profile/profile.html')
    })
    myPets.innerText = 'Ir para Meus Pets'
    myPets.style.width = '100%'
    headerContent.appendChild(myPets)
  }

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
  editProfile.addEventListener('click', () => {
    const modal = document.querySelector('.modal-wrapper')
    modal.classList.toggle('show-modal')
    createModalUpdateProfile()
  })
  logout.src = '/src/account-logout.svg'

  logout.addEventListener('click', async () => {
    const pets = await getAllPets()
    localStorage.removeItem("kenzieAdopt")
    verticalCard(pets)
    createToastfyFailed('Logout Efetuado')
    await resetHeader()
    if(uuid && uuid == '') {
      window.location.assign('/index.html')
    }
  })
  checkTheme()
}

function resetHeader() {
  const header = document.querySelector('.header')
  header.innerHTML = ''

  header.insertAdjacentHTML("beforeend",
    `<!-- Header -->
      <div class="header-head">
        <img src="/src/close-black.svg" alt="" id="close-btn" />
        <h1 class="title-1-bold" style="color: var(--color-brand-3)">
          KenziePets
        </h1>
        <img class="profile-img" src="/src/user.png" alt="" />
      </div>
      <div class="header-content">
        <h2
          class="title-1-bold"
          style="color: var(--color-brand-3); font-size: 24px"
        >
          Faça Login ou Registre-se!
        </h2>
        <button class="button-brand" id="button-login">Login</button>
        <button class="button-brand" id="button-register">Registre-se</button>
      </div>
      <div class="header-footer">
        <img class="dark-mode" src="/src/moon.svg" alt="" id="theme-btn" />
      </div>
    `)

  const closeHeader = document.getElementById("close-btn")
  const darkButton = document.getElementById("theme-btn")
  const buttonLogin = document.getElementById("button-login")
  const buttonRegister = document.getElementById("button-register")

  darkButton.addEventListener("click", () => {
    changeToDark()
  })

  closeHeader.addEventListener("click", () => {
    const header = document.querySelector('.header')
    header.classList.toggle('header-close')
  })

  buttonLogin.addEventListener("click", () => {
    const modalWrapper = document.querySelector('.modal-wrapper')
    modalWrapper.classList.toggle('show-modal')
    createModalLogin()
  })

  buttonRegister.addEventListener("click", () => {
    const modalWrapper = document.querySelector('.modal-wrapper')
    modalWrapper.classList.toggle('show-modal')
    createRegisterModal()
  })

  checkTheme()
}