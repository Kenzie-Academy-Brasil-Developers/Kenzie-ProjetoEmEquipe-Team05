export { validateLocal }

function validateLocal() {
    if(localStorage.getItem('darkMode')) {
        const darkMode = JSON.stringify(localStorage.getItem('darkMode'))
    }

    if(localStorage.getItem('user')) {
        const uuid = localStorage.getItem('user')
    }
}