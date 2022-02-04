'use strict'
console.clear();
const numberOfLetters = 5;
const numberOfAttempts = 6;

let wordList = [
    'cancer',
    'games',
    'toxic',
    'mount',
    'horse'
]
let randomIndex = Math.floor(Math.random()*wordList.length);
let secret = wordList[randomIndex];

let history = ['mount','prime'];
let currentAttempt = 'ladi';

let grid = document.getElementById('grid');

constructGrid();
updateGrid();


function constructGrid() {
    for (let i=0; i<numberOfAttempts; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let j=0; j<numberOfLetters; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = ''
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

function updateGrid() {
    let row = grid.firstChild;
    for (let attempt of history) {
        revealRow(row,attempt)
        row = row.nextSibling;
    }
    insertLetters(row,currentAttempt);
    row = row.nextSibling;
}

function revealRow(row,attempt){
    for (let i=0; i<numberOfLetters; i++){
        let cell = row.children[i];
        if(attempt[i] !== undefined){
            cell.textContent = attempt[i];
        } else {
            cell.innerHTML = '<div style="opacity:0">X</div>'
        }
        cell.style.backgroundColor = getBgColor(attempt,i);
    }
}

function insertLetters(row,attempt){
    for (let i=0; i<numberOfLetters; i++){
        let cell = row.children[i];
        if(attempt[i] !== undefined){
            cell.textContent = attempt[i];
        } else {
            cell.innerHTML = '<div style="opacity:0">X</div>'
        }
    }
}

function getBgColor(attempt,i) {
    let correctLetter = secret[i];
    let attemptLetter = attempt[i];
    console.log(i,attemptLetter,correctLetter)
    if(attemptLetter === undefined){
        return
    } else if  (!secret.includes(attemptLetter)){
        return '#3a3a3c';
    } else if (correctLetter === attemptLetter) {
        return '#538d4e';
    } else {
        return '#b59f3b'
    }
}
