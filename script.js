const $stoneButton1 = document.querySelector(".stone-button-player-1");
const $paperButton1 = document.querySelector(".paper-button-player-1");
const $scissorButton1 = document.querySelector(".scissor-button-player-1");

const $stoneButton2 = document.querySelector(".stone-button-player-2");
const $paperButton2 = document.querySelector(".paper-button-player-2");
const $scissorButton2 = document.querySelector(".scissor-button-player-2");

const $WinnerTitle = document.querySelector(".winner-title");

const $fieldPlayer1 = document.querySelector(".field-box-player-1");

const $fieldPlayer2 = document.querySelector(".field-box-player-2");

let movePlayer1 = '';
let movePlayer2 = '';
let gameResult = null;

function verifyWinner() {
    if (movePlayer1 == 'stone' && movePlayer2 == 'paper') {
        gameResult = 2
    }
    else if (movePlayer1 == 'stone' && movePlayer2 == 'scissors') {
        gameResult = 1
    }
    else if (movePlayer1 == 'paper' && movePlayer2 == 'stone') {
        gameResult = 1
    }
    else if (movePlayer1 == 'paper' && movePlayer2 == 'scissors') {
        gameResult = 2
    }
    else if (movePlayer1 == 'scissors' && movePlayer2 == 'stone') {
        gameResult = 2
    }
    else if (movePlayer1 == 'scissors' && movePlayer2 == 'paper') {
        gameResult = 1
    }
    else if (movePlayer1 ==movePlayer2) {
        gameResult = 0
    }
}

function printGameResult() {
    if (gameResult == 0) {
        $WinnerTitle.innerHTML = 'Empatou!';
    }
    else if (gameResult == 1) {
        $WinnerTitle.innerHTML = 'Player 1 ganhou!';
    }
    else if (gameResult == 2) {
        $WinnerTitle.innerHTML = 'Player 2 ganhou!';
    }
}


// Player 1
$stoneButton1.addEventListener('click', function () {
    $fieldPlayer1.innerHTML = `<img class="move-image" src="imgs/stone.png">`;
    movePlayer1 = 'stone';
    verifyWinner();
    printGameResult();
});

$paperButton1.addEventListener('click', function () {
    $fieldPlayer1.innerHTML = `<img class="move-image" src="imgs/paper.png">`;
    movePlayer1 = 'paper';
    verifyWinner();
    printGameResult();
});

$scissorButton1.addEventListener('click', function () {
    $fieldPlayer1.innerHTML = `<img class="move-image" src="imgs/scissors.png">`;
    movePlayer1 = 'scissors';
    verifyWinner();
    printGameResult();
});

// Player 2
$stoneButton2.addEventListener('click', function () {
    $fieldPlayer2.innerHTML = `<img class="move-image" src="imgs/stone.png">`;
    movePlayer2 = 'stone';
    verifyWinner();
    printGameResult();
});

$paperButton2.addEventListener('click', function () {
    $fieldPlayer2.innerHTML = `<img class="move-image" src="imgs/paper.png">`;
    movePlayer2 = 'paper';
    verifyWinner();
    printGameResult();
});

$scissorButton2.addEventListener('click', function () {
    $fieldPlayer2.innerHTML = `<img class="move-image" src="imgs/scissors.png">`;
    movePlayer2 = 'scissors';
    verifyWinner();
    printGameResult();
});