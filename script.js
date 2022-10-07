
var numberOfGrids = 16;
const gridArea = document.querySelector('.grid-area');
const changeButton = document.querySelector('#grid-size-button');
const gridAreaSize = gridArea.clientHeight;
const clearButton = document.querySelector('#circle1');
const eraseButton = document.querySelector('#circle2');

/* -- Generate Grids For Page  -- */
generateGrids();
const grids = document.querySelectorAll('.grid');

/* -- Eraser or Pencil feature -- */
eraseButton.textContent = 'Pencil';
eraseButton.addEventListener('click', () => {
    eraserOrPencil(eraseButton);
});

/* -- Fill in the grids feature -- */
grids.forEach(grid => {
    fill(grid);
});

/* -- Clear Board feature -- */
clearButton.addEventListener('click', () => {
    grids.forEach(grid => {
        clear(grid);
    })
});

/* -- Change Grid Size feature -- */
changeButton.addEventListener('click', () => {
    pickNewSize();
});

/* -- Functions -- */

// generate grids
function generateGrids() {
    for (let i = 1; i <= numberOfGrids; i++) {
        const gridCol = document.createElement('div');
        gridCol.classList.add('grid-column') 
        for (let j = 1; j <= numberOfGrids; j++) {
            const grid = document.createElement('div')
            gridCol.appendChild(grid);
            grid.classList.add('grid');
            let x = gridAreaSize/numberOfGrids;
            grid.style.width = `${x}px`;
            grid.style.height = `${x}px`;      
        }
        gridArea.appendChild(gridCol);
    }
}
// remove all child nodes of a div
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
// eraser or pencil
function eraserOrPencil(eraseButton) {
    if (eraseButton.classList.contains('erase') == false) {
        eraseButton.classList.add('erase');
        eraseButton.textContent = 'Eraser';
    }
    else {
        eraseButton.classList.remove('erase');
        eraseButton.textContent = 'Pencil';
    }
}
// fill
function fill(grid) {
    grid.addEventListener('mouseover', () => {
        if (eraseButton.classList.contains('erase')) {
            grid.classList.remove('grid-fill')
        }
        else {
            grid.classList.add('grid-fill');
        }
    });
}
// clear
function clear(grid) {
    if (grid.classList.contains('grid-fill')) {
        grid.classList.remove('grid-fill');
    }
}
// pick new size of the grid
function pickNewSize() {
    let foo = parseInt(prompt('Enter a number between 1 and 100'));
    if (foo >= 1 && foo <= 100) {
        changeSize(foo);
    }
    else {
        alert(`ERROR: input is not a number between 1 and 100`);
    }
}
// change the size fo the board
function changeSize(size) {
    removeAllChildNodes(gridArea);
    numberOfGrids = size;
    generateGrids();

    const grids = document.querySelectorAll('.grid');
    const eraseButton = document.querySelector('#circle2');

    grids.forEach(grid => {
        fill(grid);
    })

    clearButton.addEventListener('click', () => {
        grids.forEach(grid => {
            clear(grid);
        })
    });
}
