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
      checkTie();
      checkWinnder();
    } else if (turn === 1) {
      $(this).attr("value", player2);
      turn = 0;
      checkTie();
      checkWinnder();
    }
  }
  console.log($(this).attr("value"));


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
      blink("#1", "#2", "#3");
      winner = "y";
    } else if ($("#1").attr("value") === "O") {
      console.log("O  Wins!!");
      $("h1").text("O  Wins!!");
      winner = "y";
      blink("#1", "#2", "#3");
    }


  }

  //Second Row winning
  if ($("#4").attr("value") === $("#5").attr("value") && $("#5").attr("value") === $("#6").attr("value")) {
    if ($("#4").attr("value") === "X") {
      console.log("X  Wins!!");
      $("h1").text("X  Wins!!");
      winner = "y";
      blink("#4", "#5", "#6");
    } else if ($("#4").attr("value") === "O") {
      console.log("O  Wins!!");
      $("h1").text("O  Wins!!");
      winner = "y";
      blink("#4", "#5", "#6");
    }

  }

  //Third Row winning
  if ($("#7").attr("value") === $("#8").attr("value") && $("#8").attr("value") === $("#9").attr("value")) {
    if ($("#7").attr("value") === "X") {
      console.log("X  Wins!!");
      $("h1").text("X  Wins!!");
      blink("#7", "#8", "#9");
      winner = "y";
    } else if ($("#7").attr("value") === "O") {
      console.log("O  Wins!!");
      $("h1").text("O  Wins!!");
      winner = "y";
      blink("#7", "#8", "#9");
    }

  }

  //First Column winning
  if ($("#1").attr("value") === $("#4").attr("value") && $("#4").attr("value") === $("#7").attr("value")) {
    if ($("#1").attr("value") === "X") {
      console.log("X  Wins!!");
      $("h1").text("X  Wins!!");
      winner = "y";
      blink("#1", "#4", "#7");
    } else if ($("#1").attr("value") === "O") {
      console.log("O  Wins!!");
      $("h1").text("O  Wins!!");
      winner = "y";
      blink("#1", "#4", "#7");
    }

  }

  //Second Column winning
  if ($("#2").attr("value") === $("#5").attr("value") && $("#2").attr("value") === $("#8").attr("value")) {
    if ($("#2").attr("value") === "X") {
      console.log("X  Wins!!");
      $("h1").text("X  Wins!!");
      winner = "y";
      blink("#2", "#5", "#8");
    } else if ($("#2").attr("value") === "O") {
      console.log("O  Wins!!");
      $("h1").text("O  Wins!!");
      blink("#2", "#5", "#8");
    }

  }

  //Third Column winning
  if ($("#3").attr("value") === $("#6").attr("value") && $("#6").attr("value") === $("#9").attr("value")) {
    if ($("#3").attr("value") === "X") {
      console.log("X  Wins!!");
      $("h1").text("X  Wins!!");
      winner = "y";
      blink("#3", "#6", "#9");
    } else if ($("#3").attr("value") === "O") {
      console.log("O  Wins!!");
      $("h1").text("O  Wins!!");
      winner = "y";
      blink("#3", "#6", "#9");
    }

  }

  //First Diagonal winning
  if ($("#1").attr("value") === $("#5").attr("value") && $("#5").attr("value") === $("#9").attr("value")) {
    if ($("#1").attr("value") === "X") {
      console.log("X  Wins!!");
      $("h1").text("X  Wins!!");
      winner = "y";
      blink("#1", "#5", "#9");
    } else if ($("#1").attr("value") === "O") {
      console.log("O  Wins!!");
      $("h1").text("O  Wins!!");
      winner = "y";
      blink("#1", "#5", "#9");
    }
  }

  //Second Diagonal winning
  if ($("#3").attr("value") === $("#5").attr("value") && $("#3").attr("value") === $("#7").attr("value")) {
    if ($("#3").attr("value") === "X") {
      console.log("X  Wins!!");
      $("h1").text("X  Wins!!");
      winner = "y";
      blink("#3", "#5", "#7");
    } else if ($("#3").attr("value") === "O") {
      console.log("O  Wins!!");
      $("h1").text("O  Wins!!");
      winner = "y";
      blink("#3", "#5", "#7");
    }
  }

}

function clicked(id) {
  $("#" + id).addClass("clicked");

  setTimeout(function() {
    $("#" + id).removeClass("clicked");
  }, 100);

}

function checkTie() {
  numOfClicks++;
  if (numOfClicks === 9) {
    $("h1").text("Its A Tie");
  }
}

function blink(tile1, tile2, tile3) {

  var i = 1;

  var x = setInterval(function() {
    $(tile1).toggleClass("clicked");
    $(tile2).toggleClass("clicked");
    $(tile3).toggleClass("clicked");
    console.log(i);

    if(i>=8){
      clearInterval(x);
    }
    i++;
  }, 200);

  setTimeout(function(){
    alert("Please reset the game!")
  }, 1800);


}
