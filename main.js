const choices = ['rock', 'paper', 'scissors'];

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (choices.includes(userInput)) {
        return userInput;
    } else {
        console.log('Input error');
        return null; // Return null for invalid input
    }
};

const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }

    const winConditions = {
        rock: ['scissors'],
        paper: ['rock'],
        scissors: ['paper']
    };

    return winConditions[userChoice].includes(computerChoice)
        ? 'You win!'
        : 'Computer wins!';
};

const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    
    if (!userChoice) return;

    console.log("You have chosen " + userChoice);

    console.log("The computer has chosen " + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
