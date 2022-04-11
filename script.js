"use strict"

const divContainer = document.querySelector(".container");

for (let i = 0; i < 256; i++){
    let divs = document.createElement("div")
    divContainer.append(divs)
    // divs.classList.add("square")
    divs.style.width = "50px";
    divs.style.height = "50px";
    divs.style.outline = "solid #000000"
}
