"use strict"

const gridContainer = document.querySelector(".grid-container");
const gridFill = document.getElementsByClassName("gridFillClass");
const clearBtn = document.querySelector(".clearBtn");
const gridCells = document.createElement("div");


function createGrid() {
	const gridContainer = document.querySelector(".grid-container");
	let gridSize = Number(prompt("Please enter grid size (less than 100)"));
    if(gridSize <= 100){
	let gridMultiplier = gridSize * gridSize;
	gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
	gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
	for(let i = 0; i < gridMultiplier; i++){
		const gridCells = document.createElement("div");
		gridContainer.append(gridCells);
		gridCells.classList.add("gridFillClass");
		gridCells.style.outline = "solid 1px #D3D3D3";
            }
        } else {
            gridSize == isNaN;
            createGrid()
    }
}

createGrid()

// function newGrid (rows, columns){
//     // const userInput = prompt("Please enter grid size");
//     gridContainer.style.setProperty("--grid-rows", rows);
//     gridContainer.style.setProperty("--grid-columns", columns);
//     for(let i = 0; i < (rows * columns); i++){
//         const gridCells = document.createElement("div");
//         gridContainer.append(gridCells);
//         gridCells.classList.add("gridFillClass");
//         gridCells.style.outline = "solid 1px #D3D3D3";
//     }
// }

// newGrid(2,2);

// Changes divs on hover 
function colorGrid(){
for(let j = 0; j < gridFill.length; j++){
    gridFill[j].addEventListener("mouseover", function(e){
        e.target.style.background = "black";
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
    createGrid();
    colorGrid();
});



