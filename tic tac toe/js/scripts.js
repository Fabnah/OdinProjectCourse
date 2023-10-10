let button = document.querySelectorAll(".locker");
let turn = document.querySelector(".turn");
let reset = document.querySelector(".reset");
let endGame = document.querySelector("dialog");
let exit = document.querySelector(".close_dialog");
let win = document.querySelector(".winner");
let row = document.querySelectorAll(".row");
let whosWinner = document.querySelector(".whos_winner");

function game() {
  // we create 2 arrays to save the choices to the player, and a counter that help us to alternate between the players
  let xCombs = [];
  let oCombs = [];
  let cont = 0;

  button.forEach((locker, index) => {
    locker.addEventListener("click", () => {
      if (locker.textContent == "" && cont % 2 == 0) {
        locker.textContent = "X";
        turn.textContent = "Turn of O";
        cont++;
        xCombs.push(index);
        console.log(`xCombs: ${xCombs}`);
      } else if (locker.textContent == "" && cont % 2 != 0) {
        IaTurn()
        locker.textContent = "O"
        turn.textContent = "Turn of X"
        cont++;
        oCombs.push(index);
        console.log(`oCombs: ${oCombs}`);
      }
      winner(xCombs, oCombs);
    });
  });
  // add a function to the reset button
  reset.addEventListener("click", () => {
    resetGame(xCombs, oCombs);
  });
}

function resetGame(a, b) {
  button.forEach((element) => {
    element.textContent = "";
  });
  turn.textContent = "Turn of X";
  // we reset the values of xComb and oComb
  a.length = 0;
  b.length = 0;
}

function closeDialog() {
  exit.addEventListener("click", () => {
    endGame.close();
  });
}

function winner(a, b) {
    // first we create an array with all the winning positions
  let winCombs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];
  for (let i = 0; i < winCombs.length; i++) {
    if (winCombs[i].every((elem) => a.includes(elem))) {
      whosWinner.textContent = "Player X Win!";
      endGame.showModal();
      resetGame(a, b);
    } else if (winCombs[i].every((elem) => b.includes(elem))) {
      whosWinner.textContent = "Player O Win!";
      endGame.showModal();
      resetGame(a, b);
    } else if (a.length == 5 || b.length == 5) {
      whosWinner.textContent = "It's a Draw!!";
      endGame.showModal();
      resetGame(a, b);
    }
  }
}

function IaTurn() {
    let pos = Math.round(Math.random()*9);
    
}

game();
closeDialog();
