$(document).ready(function(){

  $('#paper, #rock, #scissors, #lizard, #spock').click(function(){
    var array = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    var arr = array[Math.floor (Math.random() * array.length)]; 
    $('#comp_choice').html('Computer chose ' + arr)
    var playerClick = $(this);
    var playerChoice = playerClick[0].className;
  // });

  

// (function game(playerChoice, arr){
  var msg = '';
  if(playerChoice == arr) {
    msg = "Looks like a tie Bitch!";
  } 

  else if((playerChoice == "rock") && (arr != "paper" && arr != "spock")){
    msg = "You win!";
  }

  else if((playerChoice == "paper") && (arr != "lizard" && arr != "scissors")){
    msg = "You Win!";
  }

  else if ((playerChoice == "scissors") && arr != "rock" && arr != "spock"){
    msg = "You Win!";
  } 
  
  else if ((playerChoice == "lizard") && (arr != "rock" && arr != "scissors")){
  msg = "You Win!";
  }

  else if ((playerChoice == "spock") && (arr != "lizard" && arr != "paper")){
    msg = "You Win!";
  }  

  else {
    msg = "Computer wins";
  }
  $('#winner').html("<p>" + msg + "</p>")
 });

});





