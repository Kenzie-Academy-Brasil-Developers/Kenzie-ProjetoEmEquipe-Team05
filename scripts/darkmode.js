const html = document.querySelector("html")
const theme = "dark-mode-page"
const local = localStorage.getItem('kenzieAdopt')

let darkMode

function changeToDark() {
    darkMode = !darkMode
    html.classList.toggle(theme)
    localStorage.setItem(theme, darkMode)
    changeButton()
    changeClose()
    changeLogout()
    changeMenu()
}

function changeButton() {
    const buttonCycle = ["/src/sun.svg", "/src/moon.svg"]
    const button = document.getElementById("theme-btn")

    darkMode
        ? button.src = buttonCycle[0]
        : button.src = buttonCycle[1]
}

function changeClose() {
    const buttonCycle = ["/src/close.svg", "/src/close-black.svg"]
    const button = document.getElementById("close-btn")

    darkMode
        ? button.src = buttonCycle[0]
        : button.src = buttonCycle[1]
}


function changeLogout() {
    const buttonCycle = ["/src/account-logout-white.svg", "/src/account-logout.svg"]
    const button = document.getElementById("logout-btn")

    if (button) {
        darkMode
            ? button.src = buttonCycle[0]
            : button.src = buttonCycle[1]
    }
}


function changeMenu() {
    const buttonCycle = ["/src/menu-light.svg", "/src/menu.svg"]
    const button = document.querySelector('.header-menu')

    darkMode
        ? button.src = buttonCycle[0]
        : button.src = buttonCycle[1]
}


function checkTheme() {
    darkMode = JSON.parse(localStorage.getItem(theme))
    if (darkMode == true) {
        html.classList.add(theme)
        changeButton()
        changeClose()
        changeLogout()
        changeMenu()
    } else {
        changeButton()
        changeClose()
        changeLogout()
        changeMenu()
    }
}

export {
    changeToDark,
    changeButton,
    checkTheme,
    changeLogout
}