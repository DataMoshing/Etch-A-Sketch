"use strict"

const gridContainer = document.querySelector(".grid-container");
const gridFill = document.getElementsByClassName("gridFillClass");
const clearBtn = document.querySelector(".clearBtn");
const gridCells = document.createElement("div");

function newGrid (rows,columns){
    gridContainer.style.setProperty("--grid-rows", rows);
    gridContainer.style.setProperty("--grid-columns", columns);
    for(let i = 0; i < (rows * columns); i++){
        const gridCells = document.createElement("div");
        gridContainer.append(gridCells)
        gridCells.classList.add("gridFillClass")
        gridCells.style.outline = "solid 1px #D3D3D3";
    }
}

newGrid(2,2)

// Changes divs on hover 
function colorGrid(){
for(let j = 0; j < gridFill.length; j++){
    gridFill[j].addEventListener("mouseover", function(e){
        e.target.style.background = "black"
    })
  }
}

colorGrid();

// Clears entire grid
function clearGrid() {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

clearBtn.addEventListener("click", function (e){
    clearGrid();
});


