console.log("Welcome to tic Tac Toe");

//ADDING MUSIC TO THE GAME

//Defining variables and storing the .mp3 songs in them
let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isGameover = false;
let imgbox = document.querySelector('.imgbox');
//Defining function to change turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X"; //if turn = "X" then return "0" else return "X" using ternary operator '?'
}

//Defining another Function to check for a win - leave it blank for now
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext'); //calling all the span with class="boxtext"
    //we are making an Array for 'win'. Inside of which another Array to write all the win possibilities
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won" //if condition is true then e[0] or e[1] or e[2] won
            isGameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"; //giving width to show the image and transition will also be shown
        }
    }) 

}
//GAMES LOGIC

let boxes = document.getElementsByClassName("box"); //selecting the div with class="box"
//Storing the HTML collection from above in Array
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext'); //selecting the span with class="boxtext"
    //applying eventlistener to every boxex with click event
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){ //if e.innerText is blank, then turn e.innerText to either 'X' or '0', then change the turn also
            boxtext.innerText = turn; //NOTE: if we write e.innerText = "X"; then code will be hard code
            turn = changeTurn();
            ting.play(); //play this sound whenever turned chance in the Game
            checkWin();
            if(!isGameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext'); //selecting all the 9 boxex with class="boxtext" using querySelectorAll
    Array.from(boxtext).forEach(element => {
        element.innerText = ""; //i.e. when clicked on reset button, blank or clear all the boxes
    });
    turn = "X"; //after reset, making the turn for "X" by default
    isGameover = false; //since reset means we want to restart the game again
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn; //
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"; //Making width=0 of “img” again - after reset
})