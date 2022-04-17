"use strict"

const gridContainer = document.querySelector(".grid-container");
let gridFillClass = document.getElementsByClassName("gridFill")

// Created 16x16 grid
for (let i = 0; i < 256; i++) {
    let gridCells = document.createElement("div")
    gridContainer.appendChild(gridCells);
    gridCells.style.width = "35px";
    gridCells.style.height = "35px";
    gridCells.style.outline = "solid 1px #000000";
    gridCells.classList.add("gridFill")
}

function colorGrid(){
for(let j = 0; j < gridFillClass.length; j++){
    gridFillClass[j].addEventListener("mouseover", function(e){
        e.target.style.background = "black"
    })
  }
}

colorGrid()
