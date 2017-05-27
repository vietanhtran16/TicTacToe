/**
 * Created by Viet Anh Tran on 21-May-17.
 */
import {DetermineWinner, addPlayerInputToSpecifiedIndex, ConvertCoordinateToArrayIndex} from 'test/DetermineWinnerShould'

var board = {squares: Array(9).fill("  "), xIsNext: true};

while(DetermineWinner(board) == 0 && board.squares.includes("  "))
{
    let currentUser = board.xIsNext ? "X" : "O";
    let squares = board.squares;
    var userInput = prompt(`Hey ${currentUser}, it is your turn. 
    Play the game by entering row-column coordinate of your squares. For example, 1,1 for top left squares
    Here is what the board looks like
      |1|2|3
    1|${board.squares[0]}|${board.squares[1]}|${board.squares[2]}|
    2|${board.squares[3]}|${board.squares[4]}|${board.squares[5]}|
    3|${board.squares[6]}|${board.squares[7]}|${board.squares[8]}|`);
    if(userInput == "stop")
    {
        break;
    }
    let selectedIndex = ConvertCoordinateToArrayIndex(userInput);
    addPlayerInputToSpecifiedIndex(board, selectedIndex);
}
if(DetermineWinner(board)) {
    let winner = board.xIsNext ? "O" : "X";
    alert("The winner is " + winner);
}