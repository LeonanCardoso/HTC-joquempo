// Player 1
var $stoneButton1 = document.querySelector(".stone-button-player-1");
var $paperButton1 = document.querySelector(".paper-button-player-1");
var $scissorButton1 = document.querySelector(".scissor-button-player-1");

var $stoneButton2 = document.querySelector(".stone-button-player-2");
var $paperButton2 = document.querySelector(".paper-button-player-2");
var $scissorButton2 = document.querySelector(".scissor-button-player-2");

var $fieldPlayer1 = document.querySelector(".field-box-player-1");

var $fieldPlayer2 = document.querySelector(".field-box-player-2");


$stoneButton1.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = `<img class="move-image" src="/imgs/stone.png">`;
});
$paperButton1.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = `<img class="move-image" src="/imgs/paper.png">`;
});

$scissorButton1.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = `<img class="move-image" src="/imgs/scissors.png">`;
});

// Player 2



$stoneButton2.addEventListener('click', function(){
    $fieldPlayer2.innerHTML = `<img class="move-image" src="/imgs/stone.png">`;
});
$paperButton2.addEventListener('click', function(){
    $fieldPlayer2.innerHTML = `<img class="move-image" src="/imgs/paper.png">`;
});
$scissorButton2.addEventListener('click', function(){
    $fieldPlayer2.innerHTML = `<img class="move-image" src="/imgs/scissors.png">`;
});