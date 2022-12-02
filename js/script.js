function playGame(playerInput){
  clearMessages();

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  const getMoveName = function (moveNumber){
   
    if(moveNumber == 1){
      return 'kamień';
    } else if(moveNumber == 2){
      return 'papier';
    } else if(moveNumber == 3){
      return 'nożyce';
    } 
  }
  const computerMove = getMoveName(randomNumber),
        playerMove = getMoveName(playerInput);

  const displayResult = function (argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    } 
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    }
    else if( argComputerMove == argPlayerMove ){
      printMessage('Remis');
    }else{
      printMessage('Tym razem przegrywasz.');
    }
  }
  displayResult(computerMove, playerMove);
}

document.getElementById('kamień').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('papier').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('nożyce').addEventListener('click', function(){
  playGame(3);
});