const rockButton=document.querySelector("#player-rock")
const paperButton=document.querySelector("#player-paper")
const scissorButton=document.querySelector("#player-scissor")
const result=document.querySelector("#result")
const aiRockButton=document.querySelector("#ai-rock")
const aiPaperButton=document.querySelector("#ai-paper")
const aiScissorButton=document.querySelector("#ai-scissor")
const resultAi=document.querySelector(".result-ai");
const resultPlayer=document.querySelector(".result-player");

const rock="ROCK";
const paper="PAPER";
const scissor="SCISSOR";
let winCount=0;
let loseCount=0;



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

//play game
function game(PlayerChoice){
    if(PlayerChoice==rock || PlayerChoice==paper || PlayerChoice==scissor)
    {
        let ComputerChoice=getComputerChoice();
        if(ComputerChoice==rock)
        {
            aiRockButton.classList.add("highlight");
            aiPaperButton.classList.remove("highlight");
            aiScissorButton.classList.remove("highlight");
        }
        else if(ComputerChoice==paper)
        {
            aiRockButton.classList.remove("highlight");
            aiPaperButton.classList.add("highlight");
            aiScissorButton.classList.remove("highlight");   
        }
        else if(ComputerChoice==scissor)
        {
            aiRockButton.classList.remove("highlight");
            aiPaperButton.classList.remove("highlight");
            aiScissorButton.classList.add("highlight");
        }

        declaration=playRound(ComputerChoice,PlayerChoice);
        if(declaration[4]=="W")
        {
            winCount=winCount+1;
        }
        else if(declaration[4]=="L")
        {
            loseCount=loseCount+1;
        }
        if(winCount==5)
        {
            winCount=0;
            loseCount=0;
            result.textContent="YOU WON!!!!!!!";
        }
        else if(loseCount==5)
        {
            winCount=0;
            loseCount=0;
            result.textContent="YOU LOSE :( :( :( :( :( :("
        }
        else
        {
            result.textContent=declaration;
        }
            resultAi.textContent="AI :"+loseCount;
            resultPlayer.textContent="You :"+winCount;
    }
    
}

// when rock selected
rockButton.addEventListener("click",function()
{
    game(rock);
    rockButton.classList.add("highlight");
    paperButton.classList.remove("highlight");
    scissorButton.classList.remove("highlight");
});

// when paper selected
paperButton.addEventListener("click",function()
{
    game(paper);
    rockButton.classList.remove("highlight");
    paperButton.classList.add("highlight");
    scissorButton.classList.remove("highlight");
});

// when scissor selected
scissorButton.addEventListener("click",function()
{
    game(scissor);
    rockButton.classList.remove("highlight");
    paperButton.classList.remove("highlight");
    scissorButton.classList.add("highlight");
});