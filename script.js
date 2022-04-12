"use strict"

const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 256; i++){
    let gridCells = document.createElement("div")
    gridContainer.append(gridCells)
    gridCells.style.width = "35px";
    gridCells.style.height = "35px";
    gridCells.style.outline = "solid 1px #000000"
}
