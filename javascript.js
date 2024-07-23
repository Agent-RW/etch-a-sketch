const SKETCH_GRID = document.querySelector("#sketch-grid");
const RESET_BTN = document.querySelector("#reset-button");
const TOGGLE_BTN = document.querySelector("#toggle-btn");
let rows = 16;
let cols = 16;
let tileSize;

function newGrid(rows, cols = rows) {
  tileSize = (1 / rows) * SKETCH_GRID.offsetHeight;

  for (let row = 0; row < rows; row++) {
    let gridRow = document.createElement("div");

    gridRow.style.height = `${tileSize}px`;
    gridRow.style.display = "flex";

    for (let col = 0; col < cols; col++) {
      let gridTile = document.createElement("div");
      gridTile.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "red";
      });
      gridTile.addEventListener("mouseleave", (e) => {
        e.target.style.backgroundColor = "green";
      });

      gridTile.style.backgroundColor = "blue";
      gridTile.style.width = `${tileSize}px`;
      gridRow.appendChild(gridTile);
    }

    SKETCH_GRID.appendChild(gridRow);
  }
}

function setupControls() {
  RESET_BTN.addEventListener("click", onReset);
}

function onReset(event) {
  while (SKETCH_GRID.firstChild) {
    SKETCH_GRID.removeChild(SKETCH_GRID.firstChild);
  }

  let gridSize = prompt("How large would you like your sketch-pad to be (px)?");

  if(gridSize > 100) {
    gridSize = 100;
    alert("The grid size has been capped at 100 for performance purposes");
  }

  newGrid(gridSize)
}

function onToggle(event) {
  
}

newGrid(rows, cols);
setupControls();
