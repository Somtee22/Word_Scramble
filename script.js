const wordElement = document.querySelectorAll('.word');
const hintElement = document.querySelectorAll('.hint span');
const refreshButton = document.querySelectorAll('.refresh-word');
const checkButton = document.querySelectorAll('.Check-word');
const input = document.querySelectorAll('.input');
const timeElement = document.querySelectorAll('.time span b');
const scoreElement = document.querySelectorAll('.score span');
const numOfPlays = document.querySelectorAll('.num span');


//initail variables

let word = '';
let timer;
let score = 0;
let num = 3;
let time = 10;

//initial Game
function initGame(){
    let randomIndex = Math.floor(Math.random() * words.length);
}