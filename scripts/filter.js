import { callGetAllPets } from "./index.js";
import { getAllPets } from "./requests.js";

export function filterEspecies(arr){
    const newArr =[]

    const ul = document.querySelector("#ul-pets")
    const divBack  = document.getElementById("div-back-select-off")
    divBack.classList.add("div-back-select")
    arr.forEach(element => newArr.push(element.species));
    const novaArr = newArr.filter((este, i) => newArr.indexOf(este) === i);
    novaArr.push("Todos")
    const div = document.querySelector(".card-buttons-filtro")
    div.innerHTML =""
    novaArr.forEach(element => {
        const button = document.createElement("button")
        button.id = "button-filtro"
        button.innerText = element
        div.appendChild(button)
        button.addEventListener("click", async (event) => {
            if(event.target.innerText == "Todos"){
                ul.innerHTML = ""
                callGetAllPets(arr)
                div.innerHTML =""
                divBack.classList.remove("div-back-select")
            }else{
                const newArr = arr.filter(e => e.species == event.target.innerText)
                div.innerHTML = ""
                ul.innerHTML = ""
                callGetAllPets(newArr)
                divBack.classList.remove("div-back-select")
            }
        })
    })
    divBack.addEventListener("click",()=>{
        div.innerHTML = ""
        divBack.classList.remove("div-back-select")

    })
    
}