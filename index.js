
const container = document.getElementById('container')

function createDiv(rows) {
    for (i = 0; i < rows; i++) {
        const boardDiv = document.createElement('div');
        boardDiv.className = "boardDiv";
        // console.log(boardDiv)
        container.appendChild(boardDiv)
    }

}

createDiv(16)

function createCol(cells) {
    for (a = 0; a < cells; a++) {
        for (i = 0; i < cells; i++) {
            const rowDiv = document.querySelectorAll('.boardDiv');
            const colDiv = document.createElement('div');
            colDiv.className = 'colDiv'
            rowDiv[i].appendChild(colDiv)
        }
    }
}
createCol(16)


function hover() {
    this.style.backgroundColor = 'red'
}

document.getElementsByClassName
let cells = document.getElementsByClassName('colDiv');
console.log(cells[1])
cells[0].addEventListener('mouseover', hover)

function giveListener() {
    for (i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', hover)
    }
}
console.log(giveListener())





// function createCells() {
//     for (i = 0; i < 16; i++) {
//         const rowDiv = document.querySelectorAll('.boardDiv');
//         console.log(rowDiv)
//         const colDiv = document.createElement('div');
//         colDiv.className = 'colDiv';
//         console.log(colDiv)
//         // rowDiv.append(colDiv);
//         rowDiv.forEach(element => appendChild(colDiv))

//     }
// }

// function createCells() {
//     for (i = 0; i < 16; i++) {
//         const rowDiv = document.querySelector('boardDiv');
//         console.log(rowDiv)
//         const colDiv = document.createElement('div');
//         colDiv.className = 'colDiv';
//         console.log(colDiv)
//         rowDiv.append(colDiv);


//     }
// }
// // console.log(ccreat())
// createCells()


