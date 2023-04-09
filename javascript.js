// a function to get the computer choice

function getComputerChoice(){

    // first we generate the random number between 1 & 3

    function random(max) {
        return Math.floor(Math.random() * max + 1);
    }

    // we call it in a variable

    let choice = random(3);

    // we assign the variable a string corresponding to it

    if(choice===1){choice = "rock";} 
    else if(choice===2){choice = "paper";} 
    else {choice = "scissors";}
    
    // we return the result

    return choice;
}

// a function to get the player choice

function getPlayerChoice(){
    let choice = prompt("What do you play ?");
    choice = choice.toLowerCase();
    return choice;
}

// a function for the round itself

function playRound(playerChoice, computerChoice){

    // if it's a tie

    if (playerChoice === computerChoice){console.log("It's a tie !");}
    
    // if the player wins
    
    else if (playerChoice === "rock" && computerChoice === "scissors"){console.log("You win !"); win += 1;}
    else if (playerChoice === "paper" && computerChoice === "rock"){console.log("You win !"); win += 1;}
    else if (playerChoice === "scissors" && computerChoice === "paper"){console.log("You win !"); win += 1;}
    
    // if the player loses
    
    else console.log("You lost..."); lost += 1;
}

// So I can now call : playRound(getPlayerChoice(),getComputerChoice()) to run the round.

//now for the whole game with counter itself

function game(){

    // I play exactly 5 rounds (without a loop)

    playRound(getPlayerChoice(),getComputerChoice())
    playRound(getPlayerChoice(),getComputerChoice())
    playRound(getPlayerChoice(),getComputerChoice())
    playRound(getPlayerChoice(),getComputerChoice())
    playRound(getPlayerChoice(),getComputerChoice())
    
    // I console.log() who won

    if(lost === win){console.log("That's a tie !");}
    else if(lost > win){console.log("Sadly you lost "+lost+" rounds, and doing so, the game...");}
    else console.log("Congratulation ! You won "+win+" rounds, and so, victory is yours !");
}

//Finally, I simply set my counters and call one function to play.
let win = 0;
let lost = 0;
game();