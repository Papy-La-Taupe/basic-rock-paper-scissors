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

console.log(getComputerChoice());