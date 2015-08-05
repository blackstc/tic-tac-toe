var Board = function() {
  this.moveArr = [];
  this.winCondition = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8] ,[2, 4, 6]];
};

Board.prototype.makeMove = function(player, box) {
  if (this.moveArr.indexOf(box.attr("id")) === -1 || this.moveArr.length === 0) {
    this.moveArr.push(box.attr("id"));
    player.cellID.push(+box.attr("id"));
    return true;
  } else {
    return false;
  }
};

Board.prototype.checkWinner = function(player) {

  for (var c = 0; c < this.winCondition.length; c++) {
    var current = this.winCondition[c];
    var matches = [];
    for (var i = 0; i < current.length; i++) {
      if (player.cellID.indexOf(current[i]) !== -1)
        matches.push(true);
      else
        matches.push(false);
    }
    if (matches.indexOf(false) === -1) {
      return true;
    }
  }
  return false;
};

Board.prototype.resetBoard = function() {
  this.moveArr = [];
  $('.box').empty();
};
