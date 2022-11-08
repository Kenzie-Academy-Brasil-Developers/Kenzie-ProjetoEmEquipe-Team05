function createToastfySuccess(message){
    const div = document.createElement("div")
    const pMessage = document.createElement("p")
    
    pMessage.innerText = message
    div.classList.add("toast-green")
    div.append(pMessage)
    
    return div
    }
    
function createToastfyFailed(message){
    console.log("aqi")
    const div = document.createElement("div")
    const pMessage = document.createElement("p")
    pMessage.innerText = message
    
    div.classList.add("toast-red")
    div.append(pMessage)

    return div
    }
    
export {
        createToastfySuccess,
        createToastfyFailed
       }