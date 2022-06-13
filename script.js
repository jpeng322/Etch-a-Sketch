const container = document.querySelector('.sketch-container')


function createDiv(rows) {
    for (i = 0; i < rows; i++) {
        const boardDiv = document.createElement('div');
        boardDiv.className = "boardDiv";
        // console.log(boardDiv)
        container.appendChild(boardDiv)
    }

}



function createCol(squaresPer) {
    for (a = 0; a < squaresPer; a++) {
        for (i = 0; i < squaresPer; i++) {
            const rowDiv = document.querySelectorAll('.boardDiv');
            const colDiv = document.createElement('div');
            colDiv.className = 'colDiv'
            rowDiv[i].appendChild(colDiv)
        }
    }
}



function createChart(squaresPer) {
    createDiv(squaresPer)
    createCol(squaresPer)
}

createChart(24)
// if (subBtn.clicked == true) {
//     console.log("button was clicked")
// }

// const subBtn = document.getElementById("subBtn")
// console.log(subBtn)

// subBtn.onclick = function () {
//     const numOfCells = (document.getElementById('text').value)
//     console.log()
//     for (i = 0; i < cells.length; i++) {
//         container.removeChild(container.lastChild);
//     }
//     createChart(numOfCells)
//     giveListener()
// }



document.getElementsByClassName
let cells = document.getElementsByClassName('colDiv');
let mouseDown = 0;
window.onmousedown = () => {
    // ++mouseDown;
    mouseDown = 1
    // if (mouseDown) {
    //     mouseDown = 1
    // }

}
window.onmouseup = () => {
    --mouseDown;
    // if (mouseDown) {
    //     console.log('mouse button down')
    //     console.log(mouseDown)
    // }
}


// console.log(mouseDown)


function giveBoxColor(boxColor) {
    for (i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mousemove', function () {
            hover(boxColor, this)
        }
        )
    }
    console.log(boxColor)
}


function hover(color, b) {
    if (mouseDown > 0) {
        b.style.backgroundColor = color
    }
}

function erase() {
    hover('white', this)
}

function clearAll() {
    for (cell of cells) {
        cell.style.backgroundColor = 'white';
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const color_btn = document.querySelector("#color-btn")
const rainbow_btn = document.querySelector("#rainbow-btn")
const eraser_btn = document.querySelector("#eraser-btn")
const clear_btn = document.querySelector("#clear-btn")
const options_btn = document.querySelectorAll('.options')
const color_pal = document.querySelector('#color_front')
// let color_val = colour.value
let color_val = 'black';

$("#colour").change(function (event) {
    color_val = $(this).val();
    giveBoxColor(color_val);
    $("#color_front").css('background-color', $(this).val());
});

$("#color_front").click(function (event) {
    $("#colour").click();
});

console.log(color_val)

let randomize

function randomizeColor() {
    giveBoxColor(getRandomColor());
    randomize = setInterval("giveBoxColor(getRandomColor())", 500)
}

function changeColor(btnChange) {
    for (buttons of options_btn) {
        buttons.style.color = 'black';
        buttons.style.backgroundColor = '#D8D2CB'
        buttons.style.transitionDuration = '.2s';
    };
    btnChange.style.backgroundColor = '#06283D';
    btnChange.style.color = 'white';

}

color_btn.addEventListener('click', function () {
    changeColor(color_btn);
    giveBoxColor(color_val);
    clearInterval(randomize)
})

rainbow_btn.addEventListener('click', function () {
    changeColor(rainbow_btn)
    randomizeColor()

})

eraser_btn.addEventListener('click', function () {
    changeColor(eraser_btn);
    giveBoxColor('white')
    clearInterval(randomize)
})

clear_btn.addEventListener('click', function () {
    // changeColor(clear_btn);
    clear_btn.style.backgroundColor = '#D8D2CB';
    clear_btn.style.color = 'white';
    clear_btn.style.transitionDuration = '1s';
    setTimeout(() => { blackTransition() }, 1000)
    clearAll()
})

function blackTransition() {
    clear_btn.style.color = 'black';
    clear_btn.style.transitionDuration = '1s'
}

