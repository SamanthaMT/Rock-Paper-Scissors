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
      
  function playGame(userChoice, computerChoice = getComputerChoice()) {

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
    }
    else if(winnerTitle === "Computer wins") {
      choicesMade.innerText = `${computerChoice} beats ${userChoice}`;
      winnerBanner.forEach(banner => {
        banner.classList.add('computerWins');
      })
    }
    else {
      choicesMade.innerText = `you both selected ${userChoice}`;
      winnerBanner.forEach(banner => {
        banner.classList.add('draw');
      })
    }

    

  }