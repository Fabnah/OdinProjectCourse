let piedra = document.getElementById("piedra")
let papel = document.getElementById("papel");
let tijera = document.getElementById("tijera");
let result = document.getElementById("result");

let buttonClickCount = 0;

let winStack = 0;
let loseStack = 0;
let drawStack = 0;

piedra.onclick = function () {
    game("piedra");
};
papel.onclick = function () {
    game("papel");
};
tijera.onclick = function () {
    game("tijera");
};

function getComputerChoice() {
    let aleatorio = Math.round(Math.random() * 2)
    let computerChoice = "";
    switch (aleatorio) {
        case 0:
            computerChoice = "piedra"
            break;
        case 1:
            computerChoice = "papel"
            break;
        case 2:
            computerChoice = "tijera"
            break;
    }
    console.log("computer = " + computerChoice);
    return computerChoice;
}

function round(PlayerChoice) {
    let computerChoice = getComputerChoice()
    let message = "";
    if (PlayerChoice == computerChoice) {
        message = "draw"
    } else if ((PlayerChoice == "piedra" && computerChoice == "tijera") || 
                (PlayerChoice == "papel" && computerChoice == "piedra") ||
                (PlayerChoice == "tijera" && computerChoice == "papel")) {
                message = "win";
    } else if ((PlayerChoice == "tijera" && computerChoice == "piedra") || 
                (PlayerChoice == "piedra" && computerChoice == "papel") ||
                (PlayerChoice == "papel" && computerChoice == "tijera")){
                message = "lose"
            }
            console.log("Player = " + PlayerChoice);
            return message;
}

function game(playerChoice) {


    let resultText; // Variable para almacenar el texto del resultado

    if (buttonClickCount < 5) {
        let result = round(playerChoice);
        buttonClickCount++;

        if (result == "draw") {
            drawStack++;
        } else if (result == "win") {
            winStack++;
        } else if (result == "lose") {
            loseStack++;
        }
    }

    if (buttonClickCount == 5) {
        if (winStack == loseStack) {
            resultText = "You guys are so boring";
        } else if (winStack > loseStack) {
            resultText = "Wow, you win against the computer";
        } else if (loseStack > winStack) {
            resultText = "Ha ha, High Siome";
        }

        // Actualiza el contenido del elemento "result" con el resultado final
        result.textContent = resultText;
    }
}
