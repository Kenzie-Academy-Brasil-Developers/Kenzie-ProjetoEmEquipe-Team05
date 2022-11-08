const darkButton = document.querySelector(".dark-mode")
const html = document.querySelector("html")
const theme = "dark-mode-page"
const buttonTheme = ["./src/sun.svg", "/src/moon.svg"]
let darkMode

darkButton.addEventListener("click", ()=>{
    changeToDark ()
} )


function changeToDark (){
    darkMode = !darkMode
    html.classList.toggle(theme)
    localStorage.setItem(theme, darkMode)
    changeButton(darkButton)
}

function changeButton(button){ 
    darkMode
    ? button.src = buttonTheme[0]
    : button.src = buttonTheme[1]
}



function checkTheme (){
darkMode = JSON.parse(localStorage.getItem(theme))


if(darkMode == true){
html.classList.add(theme)
changeButton(darkButton)
} else{
   changeButton(darkButton)
}
}

checkTheme()