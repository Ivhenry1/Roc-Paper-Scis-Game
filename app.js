const game = ()=> {
  let pScore = 0;
  let cScore = 0;
//start the Game
const startGame = ()=> {
  const playButton = document.querySelector('.intro button');
  const introScreen = document.querySelector('.intro');
  const match = document.querySelector('.match');
  
  playButton.addEventListener("click", () =>{
    introScreen.classList.add("fadeOut");
    match.classList.add("fadeIn");  
  });
};
  //play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function(){
        this.style.animation = "";
      });
    });
   
    //computer options
    const computerOptions = ["rock", "paper", "scissors"];

      options.forEach(option => {
        option.addEventListener("click", function() {
          //computer choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber]
         
         setTimeout(() =>{
            //here is for compare hands call
          compareHands(this.textContent, computerChoice, pScore, cScore);

          //update images
          playerHand.src = `./Assets/${this.textContent}.png`
          computerHand.src = `./Assets/${computerChoice}.png`;
         }, 2000)

          //animation
          playerHand.style.animation = "shakeplayer 2s ease";
          computerHand.style.animation = "shakecomputer 2s ease";
        });
      });   
  };

const updateScore = () =>{
  const playerScore = document.querySelector('.player-score p')
  const computerScore = document.querySelector('.computer-score p')
playerScore.textContent = pScore;
computerScore.textContent = cScore;
}




  const compareHands = (playerChoice, computerChoice) =>{
    //update text

    const winner = document.querySelector('.winner')
    const score = document.querySelector('.score');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');
    const reset = document.getElementById('reset')
    const endScreen = document.querySelector('.end')
    


  
    //end game
    if(pScore === 5 ||cScore === 5){
      const endScreen = document.querySelector('.end')
       if(pScore > cScore) {
    
     score.textContent = `You Win Game over ${cScore}:${pScore}!`; 
    match.style.display = 'none'; 
     introScreen.classList.add("fadeIn");
     setTimeout(() => {score.style.display = 'none'; }, 1000);
    introScreen.style.display = 'flex';
     return; 
    }
       else if (cScore > pScore) {
        score.textContent = `You lost Game over ${cScore}:${pScore}!`;
       match.style.display = 'none'; 
        introScreen.classList.add("fadeIn");
        setTimeout(() => {score.style.display = 'none'; }, 1000);
        introScreen.style.display = 'flex';
        return;
        };
      }
    //check for a tie
    if(playerChoice === computerChoice){winner.textContent = 'it is a tie';
        return;
    }
    //check for rock
    if(playerChoice === 'rock'){
      if(computerChoice === 'scissors'){
        winner.textContent = 'Player wins'
        pScore++;
        updateScore();
        return;
      }else{
        winner.textContent = 'Computer wins';
        cScore++;
        updateScore();
        return;
      }
    }
    //check for paper
    if(playerChoice === 'paper'){
      if(computerChoice === 'scissors'){
        winner.textContent = 'Computer wins'
        cScore++;
        updateScore();
        return;
      }else{
        winner.textContent = 'Player wins';
        pScore++;
        updateScore();
        return;
      }
    }
    //check for scissors
    if(playerChoice === 'scissors'){
      if(computerChoice === 'rock'){
        winner.textContent = 'Computer wins'
        cScore++;
        updateScore();
        return;
      }else{
        winner.textContent = 'Player wins';
        pScore++;
        updateScore();
        return;
      }
    }
  }
  //Is call all inerfunction
  startGame();
  playMatch();
  
}

//start the game function 
game();