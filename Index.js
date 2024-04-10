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
    alert(`User's choice is ${userChoice}`);
    alert(`Computer's choice is ${computerChoice}`);
    alert(determineWinner(userChoice, computerChoice));
  }
