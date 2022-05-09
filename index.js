
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

// function createChart(squaresPer) {
//     createDiv(squaresPer)
//     createCol(squaresPer)
// }



document.getElementsByClassName
let cells = document.getElementsByClassName('colDiv');

function giveListener() {
    for (i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mousemove', hover)
    }
}

giveListener()

let mouseDown = 0;
window.onmousedown = () => {
    ++mouseDown;
    if (mouseDown) {
        console.log('mouse button down')
    }
}
window.onmouseup = () => {
    --mouseDown;
    if (mouseDown) {
        console.log('mouse button down')
    }
}
function hover() {
    if (mouseDown > 0) {
        this.style.backgroundColor = 'red'
    }
}

// const subBtn = document.getElementById("subBtn")
// console.log(subBtn)
// subBtn.onclick = function () {
//     const numOfCells = (document.getElementById('text').value)
//     return createChart(numOfCells)
// }
// let btn = document.createElement('button')
// btn.innerHTML = "How many boxes per line would you like?"
// document.body.appendChild(btn)

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


