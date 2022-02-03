'use strict'

let grid = document.getElementById('grid');

function constructGrid() {
    for (let i=0; i<6; i++) {
        let row = document.createElement('div');
        for (let j=0; j<5; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = 'B'
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

constructGrid();

let wordList = [
    'cancer',
    'games',
    'toxic',
    'mount',
    'horse'
]


let randomIndex = Math.floor(Math.random()*wordList.length);
let secret = wordList[randomIndex];

console.log(randomIndex, secret)
