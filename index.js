var player1 = "X";
var player2 = "O";
var turn = 0;
var winner = "n";
var numOfClicks = 0;

$("input").click(function() {
  console.log(this);

  // $(this).addClass("clicked");
  clicked($(this).attr("id"));

  if ($(this).attr("value") === "" & winner === "n") {

    if (turn === 0) {
      $(this).attr("value", player1);
      turn = 1;
    } else if (turn === 1) {
      $(this).attr("value", player2);
      turn = 0;
    }
  }
  console.log($(this).attr("value"));
  checkWinnder();
  checkTie();
});


// --------Resetting the Game -------------
$("button").click(function() {
  turn = 0;
  $("input").attr("value", "");
  $("h1").text("Start with X");
  winner = "n";
  numOfClicks = 0;
});

function checkWinnder() {
  //First Row winning
  if ($("#1").attr("value") === $("#2").attr("value") && $("#1").attr("value") === $("#3").attr("value")) {
    if ($("#1").attr("value") === "X") {
      console.log("X  Wins!!");
      $("h1").text("X  Wins!!");
      winner = "y";
    } else if ($("#1").attr("value") === "O") {
      console.log("O  Wins!!");
      $("h1").text("O  Wins!!");
      winner = "y";
    }
  }

  //Second Row winning
  if ($("#4").attr("value") === $("#5").attr("value") && $("#5").attr("value") === $("#6").attr("value")) {
    if ($("#4").attr("value") === "X") {
      console.log("X  Wins!!");
      $("h1").text("X  Wins!!");
      winner = "y";
    } else if ($("#4").attr("value") === "O") {
      console.log("O  Wins!!");
      $("h1").text("O  Wins!!");
      winner = "y";
    }
  }

  //Third Row winning
  if ($("#7").attr("value") === $("#8").attr("value") && $("#8").attr("value") === $("#9").attr("value")) {
    if ($("#7").attr("value") === "X") {
      console.log("X  Wins!!");
      $("h1").text("X  Wins!!");
      winner = "y";
    } else if ($("#7").attr("value") === "O") {
      console.log("O  Wins!!");
      $("h1").text("O  Wins!!");
      winner = "y";
    }
  }

  //First Column winning
  if ($("#1").attr("value") === $("#4").attr("value") && $("#4").attr("value") === $("#7").attr("value")) {
    if ($("#1").attr("value") === "X") {
      console.log("X  Wins!!");
      $("h1").text("X  Wins!!");
      winner = "y";
    } else if ($("#1").attr("value") === "O") {
      console.log("O  Wins!!");
      $("h1").text("O  Wins!!");
      winner = "y";
    }
  }

  //Second Column winning
  if ($("#2").attr("value") === $("#5").attr("value") && $("#2").attr("value") === $("#8").attr("value")) {
    if ($("#2").attr("value") === "X") {
      console.log("X  Wins!!");
      $("h1").text("X  Wins!!");
      winner = "y";
    } else if ($("#2").attr("value") === "O") {
      console.log("O  Wins!!");
      $("h1").text("O  Wins!!");
      winner = "y";
    }
  }

  //Third Column winning
  if ($("#3").attr("value") === $("#6").attr("value") && $("#6").attr("value") === $("#9").attr("value")) {
    if ($("#3").attr("value") === "X") {
      console.log("X  Wins!!");
      $("h1").text("X  Wins!!");
      winner = "y";
    } else if ($("#3").attr("value") === "O") {
      console.log("O  Wins!!");
      $("h1").text("O  Wins!!");
      winner = "y";
    }
  }

  //First Diagonal winning
  if ($("#1").attr("value") === $("#5").attr("value") && $("#5").attr("value") === $("#9").attr("value")) {
    if ($("#1").attr("value") === "X") {
      console.log("X  Wins!!");
      $("h1").text("X  Wins!!");
      winner = "y";
    } else if ($("#1").attr("value") === "O") {
      console.log("O  Wins!!");
      $("h1").text("O  Wins!!");
      winner = "y";
    }
  }

  //Second Diagonal winning
  if ($("#3").attr("value") === $("#5").attr("value") && $("#3").attr("value") === $("#7").attr("value")) {
    if ($("#3").attr("value") === "X") {
      console.log("X  Wins!!");
      $("h1").text("X  Wins!!");
      winner = "y";
    } else if ($("#3").attr("value") === "O") {
      console.log("O  Wins!!");
      $("h1").text("O  Wins!!");
      winner = "y";
    }
  }

}

function clicked(id) {
  $("#" + id).addClass("clicked");

  setTimeout(function() {
    $("#" + id).removeClass("clicked");
  }, 100);

}

function checkTie(){
  numOfClicks++;
  if(numOfClicks === 9){
    $("h1").text("Its A Tie");
  }
}
