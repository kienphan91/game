let reStart = document.querySelector(".restart-button");
let scoreOfPlayer = document.querySelector(".score-player");
let scoreOfComputer = document.querySelector(".score-computer");
let choices = document.querySelectorAll(".choice");
let modal = document.querySelector(".modal");
let modalContent = document.querySelector(".modal-content");

let scoreBoard = {
  player: 0,
  computer: 0,
};

reStart.addEventListener("click", function () {
    modalContent.innerHTML = `<h1>Restart Game!</h1>`;
    scoreOfPlayer.innerHTML = `Player: ${scoreBoard.player = 0}`;
    scoreOfComputer.innerHTML = `Computer: ${scoreBoard.computer = 0}`;
    modal.style.display = "block";
  });

choices.forEach(function (element) {
  element.addEventListener("click", play);
});

function play(event) {
  const player = event.target.id;
  const computer = getReSult();
  const winner = getWinner(player, computer);
  showReSult(winner, computer);
}

function getReSult() {
  let random = Math.random();
  if (random >= 0 && random < 0.33) {
    return "rock";
  } else if (random >= 0.33 && random < 0.66) {
    return "scissors";
  } else {
    return "paper";
  }
}

function getWinner(player, computer) {
  if (player === computer) {
    return "draw";
  } else if (player == "rock") {
    if (computer == "scissors") {
      return "player";
    } else if (computer == "paper") {
      return "computer";
    }
  } else if (player == "scissors") {
    if (computer == "paper") {
      return "player";
    } else if (computer == "rock") {
      return "computer";
    }
  } else if (player == "paper") {
    if (computer == "rock") {
      return "player";
    } else if (computer == "scissors") {
      return "computer";
    }
  }
}

function showReSult(winner, computer) {

  if (winner == "player") {
    scoreBoard.player++;
    modalContent.innerHTML = `<h1>You Win!</h1>
    <i class="choice fa fa-hand-${computer}-o fa-5x"></i>
    <p>Computer chose ${computer}</p>`;
    scoreOfPlayer.innerHTML = `Player: ${scoreBoard.player}`;
  } else if (winner == "computer") {
    scoreBoard.computer++;
    modalContent.innerHTML = `<h1>You Lose!</h1>
    <i class="choice fa fa-hand-${computer}-o fa-5x"></i>
    <p>Computer chose ${computer}</p>`;
    scoreOfComputer.innerHTML = `Computer: ${scoreBoard.computer}`;
  } else {
    modalContent.innerHTML = `<h1>Draw!</h1>
    <i class="choice fa fa-hand-${computer}-o fa-5x"></i>
    <p>Computer chose ${computer}</p>`;
  }
  modal.style.display = "block";

  window.onclick = function (event) {
    if (event.target.matches(".modal")) {
      modal.style.display = "none";
    }
  };


}
