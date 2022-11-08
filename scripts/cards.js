export function renderCardsPets(element){
    const ul = document.querySelector(".ul-list-home");
    ul.insertAdjacentHTML("afterbegin",`
        <li class="card-vertical">
            <img class="img-pets" src="${element.avatar_url}" alt="image de um pet">
            <h2 class="title-1-bold">${element.name}</h2>
            <span class="text-4-bold">${element.species}</span>
        </li>
    `)
}
