import "./styles.css";
var sizeOfBoard = 5;
var header = "Tic Tac Toe " + sizeOfBoard + " x " + sizeOfBoard;
document.getElementById("board").innerHTML = "<h1>" + header + "</h1>";
var players = [];
players[0] = "X";
players[1] = "O";
var turn = 0;
var playerBitScore = [0, 0];
var winningValues = [
  31, //first row
  992, //second row
  31744, //thrid row
  1015808, //fourth row
  32505856, //fith row
  1082401, //first collumn
  2164802, //second collumn
  4460676, //third collumn
  8659208, //fourth collumn
  17318416, //fith collumn
  17043521, //right to left diagnoal
  1118480 //left to right diagonal
];
var table = document.getElementById("tictactoeTable");
var tbody = table.getElementsByTagName("tbody")[0];
var cells = tbody.getElementsByTagName("td");

var gameOver = false;

// var table = "";

/* for (var r = 0; r < sizeOfBoard; r++) {
  table += "<tr>";
  for (var c = 1; c <= sizeOfBoard; c++) {
    table += "<td 'onclick=placeMark(this)'> </td>";
  }
  table += "</tr>";
} */
document.getElementById("board").innerHTML = "<table>" + table + "</table>";

document.getElementById("tictactoeTable").addEventListener("click", placeMark);

function placeMark(points) {
  if (gameOver === false)
    document.getElementsByTagName("td").innerHTML = "" + players[turn];
  sizeOfBoard++;
  pointCount(points);
  winning();
  changeCellColor();
  if (gameOver === false) {
    switchPlayer();
  }
}
function changeCellColor() {
  for (var i = 0, length = cells.length; i < length; i++) {
    if ((cells[i].innerHTML = "X")) {
      (cells[i].style.backgroundColor = 124), 252, 0;
    } else if ((cells[i].innerHTML = "O")) {
      (cells[i].style.backgroundColor = 250), 128, 114;
    } else {
      cells[i].style.backgroundColor = "white";
    }
  }
}

function setSizeOfBoard() {
  document.getElementById("boardSizeField").value = sizeOfBoard;
}

function switchPlayer() {
  if (turn === 0) {
    turn = 1;
  } else {
    turn = 0;
  }
  //document.getElementById("turn message").innerText = players[turn] + "'s turn";
}
function pointCount(points) {
  playerBitScore[turn] += points;
}
function winning() {
  for (var i = 0; i < winningValues.length; i++) {
    if (winningValues[i] & (playerBitScore[turn] === winningValues[i])) {
      alert(players[turn] + " wins");
      gameOver = true;
    }
  }
  if (
    gameOver === false &&
    playerBitScore[0] + playerBitScore[1] === 16777215
  ) {
    alert("tie");
    gameOver = true;
  }
}
