var Player = function(team) {
  this.team = team;
  this.cellID = [];
  this.playerScore = 0;
};

Player.prototype.restart = function(won){
  //won is bool, true if player won, false if not
  this.cellID = [];
  if (won)
    this.playerScore++;
};

Player.prototype.reset = function(){
  this.cellID = [];
  this.playerScore = 0;
};
