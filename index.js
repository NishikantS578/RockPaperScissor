
game();



//declare result
function playRound(ComputerChoice,PlayerChoice){
    let winner=checkWinner(ComputerChoice,PlayerChoice);
    let declaration;
    if(winner.slice(0,7)=="player2"){
        declaration="You Win!"+winner.slice(8);
    }
    else if(winner.slice(0,7)=="player1"){
        declaration="You Lose!"+winner.slice(8);
    }
    else if(winner=="draw"){
        declaration="Draw!!!";
    }
    return declaration;
}

// check winner
function checkWinner(player1Choice,player2Choice){
    const rock="ROCK";
    const paper="PAPER";
    const scissor="SCISSOR";
    if(player1Choice==player2Choice){
        return "draw";
    }
    else if(player1Choice==rock && player2Choice==paper){
        return "player2 Paper beats Rock";
    }
    else if(player1Choice==rock && player2Choice==scissor){
        return "player1 Rock beats Scissor";
    }
    else if(player1Choice==paper && player2Choice==rock){
        return "player1 Paper beats Rock";
    }
    else if(player1Choice==paper && player2Choice==scissor){
        return "player2 Scissor beats Paper";
    }
    else if(player1Choice==scissor && player2Choice==rock){
        return "player2 Rock beats Scissor";
    }
    else if(player1Choice==scissor && player2Choice==paper){
        return "player1 Scissor beats Paper";
    }
    // else{
    //     return "player1 Scissor beats Paper";
    // }
}
// get choice from computer
function getComputerChoice(){
    let ComputerChoiceNumber=Math.round(Math.random()*3);
    let ComputerChoice
    if(ComputerChoiceNumber==1){
        ComputerChoice="Rock";
    }
    else if(ComputerChoiceNumber==2){
        ComputerChoice="Paper";
    }
    else{
        ComputerChoice="Scissor";
    }

    return ComputerChoice.toUpperCase();
}

function game(){
    let wincount=0;
    let losecount=0;
    for(let i=0;i<5;i++){
        let PlayerChoice=prompt("Enter choice").toUpperCase();
        if(PlayerChoice=="ROCK" || PlayerChoice=="PAPER" || PlayerChoice=="SCISSOR"){
            let ComputerChoice=getComputerChoice();
            declaration=playRound(ComputerChoice,PlayerChoice);
            console.log(declaration);
            if(declaration.slice(0,5)=="You W"){
                wincount+=1;
            }else if(declaration.slice(0,5)=="You L"){
                losecount+=1;
            }

        }
        else{
            i-=1;
        }
    }
    if(wincount>losecount){
        console.log("YOU WIN");
    }else if(wincount==losecount){
        console.log("DRAW")
    }
    else{
        console.log("YOU LOSE");
    }
}