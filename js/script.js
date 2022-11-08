function playGame(playerInput){
  clearMessages();

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  function getMoveName(randomNumber){
    if(randomNumber == 1){
      return 'kamień';
    } else if(randomNumber == 2){
      return 'papier';
    } else if(randomNumber == 3){
      return 'nożyce';
    }
  }

  function getMoveName(playerInput){
    if(playerInput == 1){
      return 'kamień';
    } else if(playerInput == 2){
      return 'papier';
    } else if(playerInput == 3){
      return 'nożyce';
    } else{
    printMessage('Nie znam ruchu o id ' + playerInput + '.');
    return 'nieznany ruch';
    }
  }

  let argComputerMove = getMoveName(randomNumber);
  let argPlayerMove = getMoveName(playerInput);


  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    } 
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    } else if( argComputerMove == argPlayerMove ){
      printMessage('Remis');
    }else{
      printMessage('Tym razem przegrywasz.');
    }
  }
  displayResult(argComputerMove, argPlayerMove);
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