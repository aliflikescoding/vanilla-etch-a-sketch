
var numberOfGrids = 16;

/* Generate Grids */
const gridArea = document.querySelector('.grid-area');
const gridAreaSize = gridArea.clientHeight;
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
generateGrids();

/* Button to Change grid size */
const changeButton = document.querySelector('#grid-size-button');
changeButton.addEventListener('click', () => {
    let foo = parseInt(prompt('Enter a number between 1 and 100'));
    if (foo >= 1 && foo <= 100) {
        changeSize(foo);
    }
    else {
        alert(`ERROR: input is not a number between 1 and 100`);
    }
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/* function to change the size of the board */
function changeSize(size) {
    removeAllChildNodes(gridArea);
    numberOfGrids = size;
    generateGrids();

    /*
    Same function as below but copy and pasted
    here so that the new grid has access to the functions
    */

    /* Eraser or Pencil */
    const eraseButton = document.querySelector('#circle2');
    eraseButton.textContent = 'Pencil';
    eraseButton.addEventListener('click', () => {
        if (eraseButton.classList.contains('erase') == false) {
            eraseButton.classList.add('erase');
            eraseButton.textContent = 'Eraser';
        }
        else {
            eraseButton.classList.remove('erase');
            eraseButton.textContent = 'Pencil';
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
}

/* Eraser or Pencil */
const eraseButton = document.querySelector('#circle2');
eraseButton.textContent = 'Pencil';
eraseButton.addEventListener('click', () => {
    if (eraseButton.classList.contains('erase') == false) {
        eraseButton.classList.add('erase');
        eraseButton.textContent = 'Eraser';
    }
    else {
        eraseButton.classList.remove('erase');
        eraseButton.textContent = 'Pencil';
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


