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
    this.npcMove();
    $("#your-turn").html("Player: " + this.player1.team);
    //code
  }
};

Game.prototype.npcMove = function() {
  var self = this;
  var moveIndex = Math.floor(Math.random() * 9);
  var box = $("#" + moveIndex);
  if (this.board.makeMove(this.player2, box)) {
    box.append("O");
  } else {
    this.npcMove();
  }

  if (this.board.checkWinner(this.player2)) {
    alert('Player O Wins, you suck Player X');
    this.player2.playerScore++;
    this.player1.cellID = [];
    this.player2.cellID = [];
    this.updateScore(this.player2);
    this.board.resetBoard();
  }
};

Game.prototype.updateScore = function(player) {
  if (player.team === 'X')
    $('#oneScore').html(player.playerScore);
  else
    $('#twoScore').html(player.playerScore);
};

Game.prototype.init = function() {
  var game = this;
  $(".box").on("click", function() {
    console.log(this);
    if (game.turnCounter === 0 && game.board.makeMove(game.player1, $(this))) {
      $(this).append("X");
      if (game.board.checkWinner(game.player1)) {
        alert('Player X Wins, you suck Player O');
        game.player1.playerScore++;
        game.player1.cellID = [];
        game.player2.cellID = [];
        game.updateScore(game.player1);
        game.board.resetBoard();
      }
      game.npcMove();
    } else if (game.turnCounter === 1 && game.board.makeMove(game.player2, $(this))) {
      $(this).append("O");
      if (game.board.checkWinner(game.player2)) {
        alert('Player O Wins, you suck Player X');
        game.player2.playerScore++;
        game.player1.cellID = [];
        game.player2.cellID = [];
        game.updateScore(game.player2);
        game.board.resetBoard();

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
    game.turnCounter = 0;
  });
};

$(document).ready(function() {
  var game = new Game();
  game.init();
});
