/* Generate Grids */
const gridArea = document.querySelector('.grid-area');
for (let i = 1; i <= 40; i++) {
    const gridRow = document.createElement('div');
    for (let j = 1; j <= 20; j++) {
        const grid = document.createElement('div');
        gridRow.appendChild(grid);
        grid.classList.add('grid');
    }
    gridArea.appendChild(gridRow);
}

