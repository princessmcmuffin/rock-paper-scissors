const choices = ['rock', 'paper', 'scissors'];

const getUserChoice = (UserInput) => {
  UserInput = UserInput.toLowerCase();

  UserInput = (UserInput === choices[0] || UserInput === choices[1] || UserInput === choices[2])  ? UserInput : console.log('Input error')

  return UserInput
}

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

const determineWinner = (getUserChoice, getComputerChoice) => {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  }

  const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };

  return winConditions[userChoice] === computerChoice 
    ? 'You win!' 
    : 'Computer wins!';
};

const playGame = () => {
  userChoice = getUserChoice('rock')
  console.log("You have chosen " + userChoice)
  computerChoice = getComputerChoice()
  console.log("The computer has chosen " + computerChoice)

  console.log(determineWinner(userChoice, computerChoice))
}

playGame()
