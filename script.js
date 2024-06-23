const gameboard = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
};

const player = (name, marker) => {
    return {name, marker};
}

const playerOne = player("One", "X");
const playerTwo = player("Two", "O");
let currentPlayer = playerOne;
let gameWon = false;

const displayController = (() => {
    function changePlayer (player){
        player.name === "One" ? currentPlayer = playerTwo : currentPlayer = playerOne;
    }

    function checkWin(player) {
        if((gameboard[1] == player.marker && gameboard[2] == player.marker && gameboard[3] == player.marker)||
        (gameboard[1] == player.marker && gameboard[4] == player.marker && gameboard[7] == player.marker)||
        (gameboard[1] == player.marker && gameboard[5] == player.marker && gameboard[9] == player.marker)||
        (gameboard[2] == player.marker && gameboard[5] == player.marker && gameboard[8] == player.marker)||
        (gameboard[3] == player.marker && gameboard[6] == player.marker && gameboard[9] == player.marker)||
        (gameboard[3] == player.marker && gameboard[5] == player.marker && gameboard[7] == player.marker)||
        (gameboard[4] == player.marker && gameboard[5] == player.marker && gameboard[6] == player.marker)||
        (gameboard[7] == player.marker && gameboard[8] == player.marker && gameboard[9] == player.marker)){
            gameWon = true;
            return `Player ${player.name} won!`;
        }
    }

    function clearBoard() {
        gameboard[1] = "";
        gameboard[2] = "";
        gameboard[3] = "";
        gameboard[4] = "";
        gameboard[5] = "";
        gameboard[6] = "";
        gameboard[7] = "";
        gameboard[8] = "";
        gameboard[9] = "";
        square1Btn.textContent = "";
        square2Btn.textContent = "";
        square3Btn.textContent = "";
        square4Btn.textContent = "";
        square5Btn.textContent = "";
        square6Btn.textContent = "";
        square7Btn.textContent = "";
        square8Btn.textContent = "";
        square9Btn.textContent = "";
        currentPlayer = playerOne;
        document.getElementById("player-text").textContent = "Player One starts";
    }
    
    function changePlayerText(string) {
        document.getElementById("player-text").textContent = string;
    }
    
    function addMarker(place, player) {
        let change = false;
        if(gameboard[place] === "" && !gameWon){
            gameboard[place] = player.marker;
            change = true;
            switch(place){                
                case 1:
                    if(square1Btn.textContent === "")
                        square1Btn.textContent = player.marker;
                        break;
                case 2:
                    if(square2Btn.textContent === "")
                        square2Btn.textContent = player.marker;
                        break;
                case 3:
                    if(square3Btn.textContent === "")
                        square3Btn.textContent = player.marker;
                        break;
                case 4:
                    if(square4Btn.textContent === "")
                        square4Btn.textContent = player.marker;
                        break;
                case 5:
                    if(square5Btn.textContent === "")
                        square5Btn.textContent = player.marker;
                        break;
                case 6:
                    if(square6Btn.textContent === "")
                        square6Btn.textContent = player.marker;
                        break;
                case 7:
                    if(square7Btn.textContent === "")
                        square7Btn.textContent = player.marker;
                        break;
                case 8:
                    if(square8Btn.textContent === "")
                        square8Btn.textContent = player.marker;
                        break;
                case 9:
                    if(square9Btn.textContent === "")
                        square9Btn.textContent = player.marker;
                        break;
        }}
        function isBoardFull() {
            if (gameboard[1] !== ""
                && gameboard[2] !== ""
                && gameboard[3] !== ""
                && gameboard[4] !== ""
                && gameboard[5] !== ""
                && gameboard[6] !== ""
                && gameboard[7] !== ""
                && gameboard[8] !== ""
                && gameboard[9] !== "") {
                    return true;
                }
            return false;
        }

        const winText = checkWin(player);
        if(winText){
            changePlayerText(winText);
        } else if (isBoardFull()) {
            changePlayerText("Draw");
        } else {
            if(change){
                changePlayer(player);
                changePlayerText(`Player ${currentPlayer.name}'s turn`);
            }
        }
    }
    return {addMarker, clearBoard};
})();

const square1Btn = document.getElementById("square1-btn");
square1Btn.addEventListener("click", function(){
    displayController.addMarker(1, currentPlayer);
});
const square2Btn = document.getElementById("square2-btn");
square2Btn.addEventListener("click", function(){
    displayController.addMarker(2, currentPlayer);
});
const square3Btn = document.getElementById("square3-btn");
square3Btn.addEventListener("click", function(){
    displayController.addMarker(3, currentPlayer);
});
const square4Btn = document.getElementById("square4-btn");
square4Btn.addEventListener("click", function(){
    displayController.addMarker(4, currentPlayer);
});
const square5Btn = document.getElementById("square5-btn");
square5Btn.addEventListener("click", function(){
    displayController.addMarker(5, currentPlayer);
});
const square6Btn = document.getElementById("square6-btn");
square6Btn.addEventListener("click", function(){
    displayController.addMarker(6, currentPlayer);
});
const square7Btn = document.getElementById("square7-btn");
square7Btn.addEventListener("click", function(){
    displayController.addMarker(7, currentPlayer);
});
const square8Btn = document.getElementById("square8-btn");
square8Btn.addEventListener("click", function(){
    displayController.addMarker(8, currentPlayer);
});
const square9Btn = document.getElementById("square9-btn");
square9Btn.addEventListener("click", function(){
    displayController.addMarker(9, currentPlayer);
});

const resetGameBtn = document.getElementById("reset-game-btn");
resetGameBtn.addEventListener("click", function(){
    displayController.clearBoard();
    gameWon = false;
});