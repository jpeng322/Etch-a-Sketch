
const container = document.getElementById('container')

function createDiv() {
    for (i = 0; i < 16; i++) {
        const boardDiv = document.createElement('div');
        boardDiv.className = "boardDiv";
        // console.log(boardDiv)
        container.appendChild(boardDiv)
    }

}

createDiv()

function createCol() {
    for (a = 0; a < 16; a++) {
        for (i = 0; i < 16; i++) {
            const rowDiv = document.querySelectorAll('.boardDiv');
            const colDiv = document.createElement('div');
            colDiv.className = 'colDiv'
            rowDiv[i].appendChild(colDiv)
        }
    }
}

createCol()

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


