function Comp(){
  Player.call(this, 'O');

}

Comp.prototype.checkWin = function (playerMoves, winCondition, compMoves) {
  //check for winning move
  var plays = [];
  for (var i = 0; i < winCondition.length; i++) {
    var matches = [];
    for (var a = 0; a < winCondition[i].length; a++) {
      if (compMoves.indexOf(winCondition[i][a]) !== -1) {
        matches.push(winCondition[i][a]);
      }
    }
    if (matches.length === 2)
      plays.push(winCondition[i]);
  }

  plays = plays.filter(function(a){
    for (var i = 0; i < a.length; i++) {
      if (a.indexOf(playerMoves[i]) !== -1) {
        return false;
      }
    }
    return true;
  });

  return plays;
};

Comp.prototype.blockPlayer = function (playerMoves, winCondition) {
  // body...
  return this.checkWin(this.cellID, winCondition, playerMoves);
};

Comp.prototype.pickCell = function (compWinMoves) {
  var cellID = this.cellID;
  var pickOne = compWinMoves[0];
  return pickOne.filter(function(cell) {
    return cellID.indexOf(cell) === -1;
  })[0];
};
