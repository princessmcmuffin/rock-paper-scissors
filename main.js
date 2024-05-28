const getUserChoice = userInput  => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput
    } else {
      console.log('Error')
    }
  }
  
  function getComputerChoice() {
    const num = Math.floor(Math.random() * 3)
    if (num === 0) {
      return 'rock'
    } else if (num === 1) {
      return 'paper'
    } else {
      return 'scissors'
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "User: " + userChoice + " | Comp: " + computerChoice + " | It was a tie"
    } if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return "User: " + userChoice + " | Comp: " + computerChoice + " | Computer won"
      } else {
        return "User: " + userChoice + " | Comp: " + computerChoice + " | Human won"
      }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return "User: " + userChoice + " | Comp: " + computerChoice + ' | Computer won'
        } else {
          return "User: " + userChoice + " | Comp: " + computerChoice + ' | Human won'
        }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return "User: " + userChoice + " | Comp: " + computerChoice + " | Computer won"
      } else {
        return "User: " + userChoice + " | Comp: " + computerChoice + " | Human won"
      }
    }
  }
  
  console.log(determineWinner(getUserChoice("rock"), getComputerChoice()))