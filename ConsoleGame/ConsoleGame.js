/**
 * Created by Viet Anh Tran on 21-May-17.
 */
import {DeterminWinner, addPlayerInputToSpecifiedIndex} from 'test/DetermineWinnerShould'

var board = {squares: Array(9).fill(null), xIsNext: true};

while(DeterminWinner(board) == null && board.squares.includes(null))
{
    let currentUser = board.xIsNext ? "X" : "O";
    let squares = board.squares;
    var userInput = prompt(`Hey ${currentUser}, it's your turn.\nHere is what the board is like\n${board.squares[0]}|${board.squares[1]}|${board.squares[2]}\n${board.squares[3]}|${board.squares[4]}|${board.squares[5]}\n${board.squares[6]}|${board.squares[7]}|${board.squares[8]}`);
    if(userInput == "stop")
    {
        break;
    }
    addPlayerInputToSpecifiedIndex(board, userInput);
}
if(DeterminWinner(board)) {
    let winner = board.xIsNext ? "O" : "X";
    alert("The winner is " + winner);
}