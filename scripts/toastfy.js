/* Export */
export {
    createToastfySuccess,
    createToastfyFailed
}

/* Declarations */
const body = document.querySelector("body")

/* Code */
function createToastfySuccess(message) {
    const div = document.createElement("div")
    const p = document.createElement("p")

    p.innerText = message
    p.className = "text-3-semibold"

    div.className = "toast-green"
    div.appendChild(p)

    body.appendChild(div)
}

function createToastfyFailed(message) {
    const div = document.createElement("div")
    const p = document.createElement("p")

    p.innerText = message
    p.className = "text-3-semibold"

    div.className = "toast-red"
    div.appendChild(p)

    body.appendChild(div)
}