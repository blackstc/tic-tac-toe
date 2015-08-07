function Comp(){
  Player.call(this, 'O');

}

Comp.prototype.checkWin = function (playerMoves, winCondition, compMoves) {
  //check for winning move
  var plays = [];
  debugger;

  for (var i = 0; i < winCondition.length; i++) {
    var matches = [];
    for (var a = 0; a < winCondition[i].length; a++) {
      if (compMoves.indexOf(winCondition[i][a]) !== -1 && playerMoves.indexOf(winCondition[i][a]) === -1) {
        matches.push(winCondition[i][a]);
      }
    }
    if (matches.length === 2)
      plays.push(winCondition[i]);
  }

  return plays;
};

Comp.prototype.blockPlayer = function (playerMoves, winCondition) {
  // body...
  return this.checkWin(this.cellID, winCondition, playerMoves);
};

Comp.prototype.pickCell = function (player, WinMoves) {
  var cellID = player.cellID;
  var pickOne = WinMoves[0];
  if (pickOne === undefined) {
  } else {
  return pickOne.filter(function(cell) {
    return cellID.indexOf(cell) === -1;
    })[0];
  }
};

Comp.prototype.restart = function(won){
  //won is bool, true if player won, false if not
  this.cellID = [];
  if (won)
    this.playerScore++;
};

Comp.prototype.reset = function(){
  this.cellID = [];
  this.playerScore = 0;
};
