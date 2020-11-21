var blankSpot = "";
var idButtons = ["b00","b01","b02","b10","b11","b12","b20","b21","b22"];
var gameMatriz = [["-","-","-"],["-","-","-"],["-","-","-"]];

var currSymbolIndex = 0;
var symbols = ["X", "O"];

var endGame;
function startGame(){

    for (var i = 0; i < 9; i++) {
    document.getElementById(idButtons[i]).innerHTML = blankSpot;
    }
    document.getElementById("reset").style.visibility = "hidden";
    document.getElementById("message").style.visibility = "hidden";
    document.getElementById("jogador").innerHTML = "É a vez do jogador O";
    document.getElementById("jogador").style.visibility = "visible";
    endGame = false;
    currSymbolIndex = 0;

    for (var i = 0; i < 3; i++){
        for (var j = 0; j < 3; j++){
            gameMatriz[i][j] = "-";
        }
    }
}

function buttonClicked(row, column){
    if(gameMatriz[row][column] != "-") {
        return;
    }
    if (endGame){
        return;
    }
    
    currSymbolIndex = currSymbolIndex == 0 ? 1 : 0;
    if (currSymbolIndex == 0){
        document.getElementById("jogador").innerHTML = "É a vez do jogador O";
        document.getElementById("jogador").style.visibility = "visible";
    } else {
        document.getElementById("jogador").innerHTML = "É a vez do jogador X";
        document.getElementById("jogador").style.visibility = "visible";
    }
    idCurrButton = idButtons[3*row+column];
    document.getElementById(idCurrButton).innerHTML = symbols[currSymbolIndex];
    gameMatriz[row][column] = symbols[currSymbolIndex];
    
    checkWinner();

}

function checkWinner(){
    for(var i = 0; i < 3; i++){
        if (gameMatriz[i][0] == gameMatriz[i][1] && gameMatriz[i][0] == gameMatriz[i][2]){
            if (gameMatriz[i][0] != '-'){
                //GANHADOR
                winner();
                return;
            }
        }

        if (gameMatriz[0][i] == gameMatriz[1][i] && gameMatriz[0][i] == gameMatriz[2][i]){
            if (gameMatriz[0][i] != '-'){
                //GANHADOR
                winner();
                return;
            }
        }
    }

    if (gameMatriz[0][0] == gameMatriz [1][1] && gameMatriz[0][0] == gameMatriz [2][2]){
        if (gameMatriz[0][0] != '-'){
            //GANHADOR
            winner();
            return;
        }
    }

    if (gameMatriz[0][2] == gameMatriz [1][1] && gameMatriz[0][2] == gameMatriz [2][0]){
        if (gameMatriz[0][2] != '-'){
            //GANHADOR
            winner();
            return;
        }
    }
    checkDrawn();
}
function winner(){
    document.getElementById("message").innerHTML = symbols[currSymbolIndex] + " Venceu!!";
    document.getElementById("message").style.color = "rgb(0, 182, 55)";
    endGame = true;
    document.getElementById("reset").style.visibility = "visible";
    document.getElementById("message").style.visibility = "visible";
    document.getElementById("jogador").style.visibility = "hidden";

}
function draw(){
    document.getElementById("message").innerHTML = "EMPATE!!";
    document.getElementById("message").style.color = "rgb(0, 182, 55)";

    endGame = true;
    document.getElementById("reset").style.visibility = "visible";
    document.getElementById("message").style.visibility = "visible";
    document.getElementById("jogador").style.visibility = "hidden";


}

function checkDrawn(){
    for (var i = 0; i < 3; i++){
        for (var j = 0; j < 3; j++){
            if (gameMatriz[i][j] == "-"){
                return;
            }
        }
    }
    draw();
}