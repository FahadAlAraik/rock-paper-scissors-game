var gameStarted = false; // to check whether game started or not
var canvas = document.querySelector("#canvas") // to display none
var result = document.querySelector("#result");
var choices = ['rock','paper','scissors'];
var winner = ""
var displayPlayer = document.querySelector("#player");
var displayRobot = document.querySelector("#robot");
var score = document.querySelector("#score");
var text = document.querySelector("#change")

$(document).ready(function() {

    

    $("#canvas").click(function(e){
        if(e.target.id != ""){
            startGame(e.target.id)
            
        }
    })


})


function startGame(userChoice) {

    canvas.style.display = "none";
    result.style.display= "block";
    var random = Math.floor(Math.random() * 3)
    var robotChoice = choices[random];
    displayPlayer.src = "assets/"+userChoice+".png"
    displayRobot.src = "assets/"+robotChoice+".png"
    if(whoWon(userChoice,robotChoice) == "user") {

        $("#change").text("You Won !!")
        score.innerHTML++;


    }

    else if(whoWon(userChoice,robotChoice)=="robot"){
        $("#change").text("ROBOT WON YOU IDIOT!");
        document.getElementById("robotScore").innerHTML++;
    }

    else {
        $("#change").text("its a draw, well at least you havent lost to a robot huh")
    }




}



function whoWon(userChoice,robotChoice){

    if(userChoice == "rock")
    {
        if(robotChoice == "scissors") {
            return "user";
        }
        
        else if (robotChoice == "paper") {
            return "robot";
        }

        else
            return "draw";
    }

    else if (userChoice == "paper") {

        if(robotChoice == "rock"){
            return "user";
        }

        else if (robotChoice == "scissors") {
            return "robot";
        }

        else
            return "draw";



    }
    //scissors
    else {

        if(robotChoice == "paper"){
            return "user"
        }

        else if (robotChoice == "rock") {
            return "robot"
        }

        else {
            return "draw"
        }

    }


}

function resetGame() {

    $("#change").text("Pick Your Choice!")
    result.style.display = "none";
    canvas.style.display= "flex";  

}