/*const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else if (userInput === 'bomb') {
      return userInput;
    } else {
    console.log('Error: Invalid item entered');
    }
  }  
}
*/

//randomly assigns a choice for the computer
function getComputerChoice() {
    let computerNumber = Math.floor(Math.random()*3);
    if(computerNumber === 0) {
        var rockCSS = document.getElementsByClassName('rock');
        rockCSS.style.visibility = 'none';
      return 'rock';
    } else if(computerNumber === 1) {
      return 'paper';
    } else if(computerNumber === 2){
      return 'scissors';
    } else{
      getComputerChoice();
    }
  }
  
//compares user and computer choices to determine the winner
  function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
      return 'Game is a tie';
    } else if(userChoice === 'bomb') {
      return 'Cheat code activated: User wins';
    } else if(userChoice === 'rock') {
        if(computerChoice === 'paper') {
          return 'Computer wins';
        } else {
          return 'User wins';
        }
    } else if(userChoice === 'paper') {
        if(computerChoice === 'scissors') {
          return 'Computer wins';
        } else {
          return 'User wins';
        }
    } else {
        if(computerChoice === 'rock') {
          return 'Computer wins';
        } else {
          return 'User wins';
        }
    

    }
  }

  let computerScore = 0;
  let userScore = 0;

  //highlights the user and computer choices to the user
  let gameReset = true;
      
  function playGame(userChoice, computerChoice = getComputerChoice()) {

    if(gameReset === true) {
      
      const choices = document.querySelectorAll('.choice');
      choices.forEach(choice => {
        choice.classList.add('choiceClicked');
      });
      
      if(userChoice === computerChoice) {
        const sameChoicePic = document.querySelectorAll(`.${userChoice}`);
        sameChoicePic.forEach(choice => {
          choice.classList.add('samePicClicked');
        });
      }
      else {
        const choicePic = document.querySelectorAll(`.${userChoice}`);
        choicePic.forEach(choice => {
          choice.classList.add('choicePicClicked');
        });

        const compChoicePic = document.querySelectorAll(`.${computerChoice}`);
        compChoicePic.forEach(choice => {
          choice.classList.add('compPicClicked');
        });
      }
      displayWinnerMessage(userChoice, computerChoice);
    }
  }

  //message displayed showing the results of the game
  function displayWinnerMessage(userChoice, computerChoice) {

    let winnerTitle = determineWinner(userChoice, computerChoice);

    const choicesMade = document.getElementById('choicesMade');
    choicesMade.innerText = `User's choice is ${userChoice}`;

    const declareWinner = document.getElementById('declareWinner');
    declareWinner.innerText = `${winnerTitle.toUpperCase()}`;

    const winnerBanner = document.querySelectorAll(`.gameOutcome`);

    if(winnerTitle === "User wins") {
      choicesMade.innerText = `${userChoice} beats ${computerChoice}`;
      winnerBanner.forEach(banner => {
        banner.classList.add('userWins');
      })
      userScore++;
    }
    else if(winnerTitle === "Computer wins") {
      choicesMade.innerText = `${computerChoice} beats ${userChoice}`;
      winnerBanner.forEach(banner => {
        banner.classList.add('computerWins');
      })
      computerScore++;
    }
    else {
      choicesMade.innerText = `you both selected ${userChoice}`;
      winnerBanner.forEach(banner => {
        banner.classList.add('draw');
      })
    }

    const playBtn = document.querySelectorAll('.play');
    playBtn.forEach(button => {
      button.classList.add('playReveal');
    })

    gameReset = false;

  }

  //reset the game
  function resetGame() {

    const computerScoreDisplay = document.querySelector('.rScore');
    computerScoreDisplay.innerText = `Score: ${computerScore}`;

    const userScoreDisplay = document.querySelector('.pScore');
    userScoreDisplay.innerText = `Score: ${userScore}`;

    const resetChoice = document.querySelectorAll('.choice');
    resetChoice.forEach(choice => {
      choice.classList.remove('choiceClicked', 'choicePicClicked', 'compPicClicked', 'samePicClicked');
    })

    const resetPlay = document.querySelectorAll('.play');
    resetPlay.forEach(button => {
      button.classList.remove('playReveal');
    })

    const resetWinner = document.querySelectorAll('.gameOutcome');
    resetWinner.forEach(winner => {
      winner.classList.remove('userWins', 'computerWins', 'draw');
    })    

    gameReset = true;

  }