
const gridHeight = 20;
const gridWidth = 40;

/* Generate Grids */
const gridArea = document.querySelector('.grid-area');
for (let i = 1; i <= gridWidth; i++) {
    const gridCol = document.createElement('div');
    gridCol.classList.add('gridCol');
    for (let j = 1; j <= gridHeight; j++) {
        const grid = document.createElement('div');
        gridCol.appendChild(grid);
        grid.classList.add('grid');
    }
    gridArea.appendChild(gridCol);
}

/* erase */
const eraseButton = document.querySelector('#circle2');
eraseButton.addEventListener('click', () => {
    if (eraseButton.classList.contains('erase') == false) {
        eraseButton.classList.add('erase');
    }
    else {
        eraseButton.classList.remove('erase');
    }
});

/* change fill if hovered */
const grids = document.querySelectorAll('.grid');
grids.forEach(grid => {
    grid.addEventListener('mouseover', () => {
        if (eraseButton.classList.contains('erase')) {
            grid.classList.remove('grid-fill')
        }
        else {
            grid.classList.add('grid-fill');
        }
    });
});

/* Clear the board */
const clearButton = document.querySelector('#circle1');
clearButton.addEventListener('click', () => {
    grids.forEach(grid => {
        if (grid.classList.contains('grid-fill')) {
            grid.classList.remove('grid-fill');
        }
    })
});

