const SKETCH_PAD = document.querySelector("#sketch-pad");
const RESET_BTN = document.querySelector("#reset-button");
const GRID_ROWS = 16;
const GRID_COLS = 16;
let tileSize = (1 / GRID_ROWS) * SKETCH_PAD.offsetHeight;

for (let row = 0; row < GRID_ROWS; row++) {
  let gridRow = document.createElement("div");

  gridRow.style.height = `${tileSize}px`;
  gridRow.style.display = "flex";

  for (let col = 0; col < GRID_COLS; col++) {
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
