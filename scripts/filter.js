import { verticalCard } from "./cards.js";

export function filterEspecies(arr){
    const newArr =[]
    const select = document.querySelector(".select-box")
    const ul = document.querySelector("#ul-pets")
    arr.forEach(element => newArr.push(element.species));
    
    const novaArr = ["Todos"] 
    newArr.filter((este, i) => {
        if(newArr.indexOf(este) === i){
            novaArr.push(este)
        }
    });

    novaArr.forEach((element) => {
        const option = document.createElement("option")
        option.classList = "button-filtro"
        option.innerText = element
        option.value = element
        select.appendChild(option)
    })

    select.addEventListener("change",(event)=>{
        if(event.target.value == "Todos"){
            ul.innerHTML =""
            verticalCard(arr)
        }else{
            ul.innerHTML =""
            const array = arr.filter(e => e.species == event.target.value)
            verticalCard(array)
        }
    })
    

}