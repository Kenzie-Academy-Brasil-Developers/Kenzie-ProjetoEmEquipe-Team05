const html = document.querySelector("html")
const theme = "dark-mode-page"
const location = window.location.href

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
    const button = document.getElementById("theme-btn")
    if (location.includes('profile.html')){
        const buttonCycle = ["../../src/sun.svg", "../../src/moon.svg"]
        darkMode
        ? button.src = buttonCycle[0]
        : button.src = buttonCycle[1]
    } else {
        const buttonCycle = ["./src/sun.svg", "./src/moon.svg"]
        darkMode
        ? button.src = buttonCycle[0]
        : button.src = buttonCycle[1]
    }
}

function changeClose() {
    
    const button = document.getElementById("close-btn")

    if (location.includes('profile.html')){
        const buttonCycle = ["../../src/close.svg", "../../src/close-black.svg"]
        darkMode
        ? button.src = buttonCycle[0]
        : button.src = buttonCycle[1]
    } else {
        const buttonCycle = ["./src/close.svg", "./src/close-black.svg"]
        darkMode
        ? button.src = buttonCycle[0]
        : button.src = buttonCycle[1]
    }
}


function changeLogout() {
    const button = document.getElementById("logout-btn")
    if(button) {
        if (location.includes('profile.html')){
            const buttonCycle = ["../../src/account-logout-white.svg", "../../src/account-logout.svg"]
            darkMode
            ? button.src = buttonCycle[0]
            : button.src = buttonCycle[1]
        } else {
            const buttonCycle = ["./src/account-logout-white.svg", "./src/account-logout.svg"]
            darkMode
            ? button.src = buttonCycle[0]
            : button.src = buttonCycle[1]
        }
    }
}


function changeMenu() {
    const button = document.querySelector('.header-menu')
    if (location.includes('profile.html')){
        const buttonCycle = ["../../src/menu-light.svg", "../../src/menu.svg"]
        darkMode
        ? button.src = buttonCycle[0]
        : button.src = buttonCycle[1]
    } else {
        const buttonCycle = ["./src/menu-light.svg", "./src/menu.svg"]
        darkMode
        ? button.src = buttonCycle[0]
        : button.src = buttonCycle[1]
    }
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