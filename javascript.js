const SKETCH_PAD = document.querySelector("#sketch-pad");
const RESET_BTN = document.querySelector("#reset-button");
let rows = 16;
let cols = 16;
let tileSize;

function newGrid(rows, cols) {
  tileSize = (1 / rows) * SKETCH_PAD.offsetHeight;
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

    SKETCH_PAD.appendChild(gridRow);
  }
}

function setupControls() {
  RESET_BTN.addEventListener("click", onReset);
}

function onReset(event) {
  while (SKETCH_PAD.firstChild) {
    SKETCH_PAD.removeChild(SKETCH_PAD.firstChild);
  }

  let newRows = prompt("How many rows?");
  let newCols = prompt("How many columns?");

  newGrid(newRows, newCols);
}

newGrid(rows, cols);
setupControls();
