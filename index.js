'use strict'
console.clear();

let grid = document.getElementById('grid');
constructGrid();

let wordList = [
    // 'cancer',
    // 'games',
    // 'toxic',
    // 'mount',
    'horse'
]
let randomIndex = Math.floor(Math.random()*wordList.length);
let secret = wordList[randomIndex];



function constructGrid() {
    for (let i=0; i<6; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let j=0; j<5; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = ''
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

let attempts = ['rohan'];
let currentAttempt = '';

updateGrid();

function updateGrid() {
    let row = grid.firstChild;
    for (let attempt of attempts) {
        revealPastAttempt(row,attempt)
        row = row.nextSibling;
    }
    revealCurrentAttempt(row,currentAttempt);
    row = row.nextSibling;
}

function revealPastAttempt(row,attempt){
    for (let i=0; i<5; i++){
        let cell = row.children[i];
        cell.textContent = attempt[i];
        cell.style.backgroundColor = getBgColor(attempt,i);
    }
}
function revealCurrentAttempt(row,attempt){
    for (let i=0; i<5; i++){
        let cell = row.children[i];
        cell.textContent = attempt[i] ?? '';
    }
}

function getBgColor(attempt,i) {
    let correctLetter = secret[i];
    let attemptLetter = attempt[i];
    console.log(i,attemptLetter,correctLetter)
    if (!secret.includes(attemptLetter)){
        return 'darkgrey';
    } else if (correctLetter === attemptLetter) {
        return 'green';
    } else {
        return 'yellow'
    }
}

console.log();
document.addEventListener('click',test)

function test(){
    grid.style.backgroundColor = 'red';
    console.log(grid.style.backgroundColor)
}