const body = document.querySelector("body")

function createToastfySuccess(message) {
    const div = document.createElement("div")
    const p = document.createElement("p")

    p.innerText = message
    p.className = "text-3-semibold"
    p.style = "color: white"

    div.className = "toast-green"
    div.appendChild(p)

    body.appendChild(div)
}

function createToastfyFailed(message) {
    const div = document.createElement("div")
    const p = document.createElement("p")

    p.innerText = message
    p.className = "text-3-semibold"
    p.style = "color: white"

    div.className = "toast-red"
    div.appendChild(p)

    body.appendChild(div)
}

export {
    createToastfySuccess,
    createToastfyFailed
}