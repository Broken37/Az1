let playerSymbol = "O";
let gameEnded = false

let winPos = [
    [1, 2, 3], [4, 5, 6],
    [7, 8, 9], [1, 4, 7],
    [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
];

function checkWin() {
    for (let i = 0; i < winPos.length; i++) {
        if (
            document.getElementById(winPos[i][0]).innerHTML === playerSymbol &&
            document.getElementById(winPos[i][1]).innerHTML === playerSymbol &&
            document.getElementById(winPos[i][2]).innerHTML === playerSymbol
        ) {
            document.getElementById(winPos[i][0]).classList.add("win");
            document.getElementById(winPos[i][1]).classList.add("win");
            document.getElementById(winPos[i][2]).classList.add("win");
            gameEnded = true;
            console.log(playerSymbol)
            setTimeout(function () {
                alert(playerSymbol + " wins!");
            }, 500);
        }
    }
}

for (let i = 1; i <= 9; i++) {
    // Whenever a player clicks on a cell
    document.getElementById(i.toString()).addEventListener(
        "click",
        function () {
            if (this.innerHTML === "" && !gameEnded) {
                // Swap the symbol to the other one for the next turn
                if (playerSymbol === "X")
                    playerSymbol = "O"
                else
                    playerSymbol = "X"

                // Display either "X" or "O" in the cell, and style it
                this.innerHTML = playerSymbol;
                this.classList.add(playerSymbol.toLowerCase());

                // Check if a player has won
                console.log(playerSymbol)
                checkWin();

            }
        }
    );
}