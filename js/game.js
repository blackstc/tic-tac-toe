var Game = function() {
  this.board = new Board();
  this.player1 = new Player("X");
  this.player2 = new Player("O");
  this.turnCounter = 0;
};

Game.prototype.nextPlayer = function() {
  if (this.turnCounter === 0) {
    this.turnCounter++;
    $("#your-turn").html("Player: " + this.player2.team);
    //code
  } else {
    this.turnCounter--;
    $("#your-turn").html("Player: " + this.player1.team);
    //code
  }
};

Game.prototype.updateScore = function(player) {
  if (player.team === 'X')
    $('#oneScore').html(player.playerScore);
  else
    $('#twoScore').html(player.playerScore);
};

Game.prototype.nextGame = function(winner, loser) {
  //winner is the player that won
  winner.restart(true);
  loser.restart(false);
  this.updateScore(winner);
  this.board.resetBoard();
};

Game.prototype.init = function() {
  var game = this;
  $(".box").on("click", function() {
    console.log(this);
    if (game.turnCounter === 0 && game.board.makeMove(game.player1, $(this))) {
      $(this).append("X");
      if (game.board.checkWinner(game.player1)) {
        alert('Player X Wins, you suck Player O');
        game.nextGame(game.player1, game.player2);
      }
      game.nextPlayer();
    } else if (game.turnCounter === 1 && game.board.makeMove(game.player2, $(this))) {
      $(this).append("O");
      if (game.board.checkWinner(game.player2)) {
        alert('Player O Wins, you suck Player X');
        game.nextGame(game.player2, game.player1);
      }
      game.nextPlayer();
    }
    else {
      alert("you're the best guys ever!");
    }

  });

  $('.reset').on('click', function(){
    game.player1.playerScore = 0;
    game.player2.playerScore = 0;
    game.player1.cellID = [];
    game.player2.cellID = [];
    game.updateScore(game.player1);
    game.updateScore(game.player2);
    game.board.resetBoard();
    game.turnCounter = 1;
    game.nextPlayer();
  });
};

$(document).ready(function() {
  var game = new Game();
  game.init();
})
