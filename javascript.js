const SKETCH_GRID = document.querySelector("#sketch-grid");
const RESET_BTN = document.querySelector("#reset-button");
const TOGGLE_BTN = document.querySelector("#toggle-button");
const MODES = ["black", "red", "layered"];
const DEFAULT_SIZE = 20;
let currMode = 0;
let tileSize;

function newGrid(rows, cols = rows) {
  // Subtracting 24 accounts for the internal padding of SKETCH_GRID
  tileSize = (1 / rows) * (SKETCH_GRID.offsetHeight - 24);

  for (let row = 0; row < rows; row++) {
    let gridRow = document.createElement("div");

    gridRow.style.height = `${tileSize}px`;
    gridRow.style.display = "flex";

    for (let col = 0; col < cols; col++) {
      let gridTile = document.createElement("div");
      gridTile.style.backgroundColor = "white";
      gridTile.style.width = `${tileSize}px`;

      gridTile.addEventListener("mouseenter", (e) => {
        e.target.style.opacity = "0.5";
      });
      gridTile.addEventListener("mouseleave", (e) => {
        e.target.style.opacity = "1.0";
      });
      gridTile.addEventListener("mouseleave", (e) => {
        e.target.style.backgroundColor = MODES[currMode];
      });

      gridRow.appendChild(gridTile);
    }

    SKETCH_GRID.appendChild(gridRow);
  }
}

function getGridTiles() {
  let gridRows = SKETCH_GRID.childNodes;
  let gridTiles = new Array();

  for (let gridRow of gridRows) {
    let rowTiles = gridRow.childNodes;

    for (let gridTile of rowTiles) {
      gridTiles.push(gridTile);
    }
  }

  return gridTiles;
}

function setTileMode(gridTile, mode) {
  gridTile.removeEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = MODES[currMode];
  });

  gridTile.addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = MODES[mode];
  });

  currMode = mode;
}

function setGridMode(mode) {
  let gridTiles = getGridTiles();
  gridTiles.forEach((gridTile) => {
    setTileMode(gridTile, mode);
  });
}

function toggleGridMode() {
  if (++currMode >= MODES.length) {
    currMode = 0;
  }

  setGridMode(currMode);
}

function setupControls() {
  RESET_BTN.addEventListener("click", onClickReset);
  TOGGLE_BTN.addEventListener("click", onClickToggle);
}

function onClickReset(event) {
  while (SKETCH_GRID.firstChild) {
    SKETCH_GRID.removeChild(SKETCH_GRID.firstChild);
  }

  let gridSize = prompt("How large would you like your sketch-pad to be (px)?");

  if (gridSize > 100) {
    gridSize = 100;
    alert("The grid size has been capped at 100 for performance purposes");
  }

  newGrid(gridSize);
}

function onClickToggle(event) {
  toggleGridMode()
}

newGrid(DEFAULT_SIZE);
setupControls();
