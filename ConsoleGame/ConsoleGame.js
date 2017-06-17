/**
 * Created by Viet Anh Tran on 21-May-17.
 */

var fs = require('fs');
var vm = require('vm');

var consoleGameLogicPath = 'GameLogic/ConsoleGameLogic.js';
var consoleGameLogicCode = fs.readFileSync(consoleGameLogicPath);
vm.runInThisContext(consoleGameLogicCode);

var gameLogicPath = 'GameLogic/GameLogic.js';

var gameLogicCode = fs.readFileSync(gameLogicPath);
vm.runInThisContext(gameLogicCode);

var board = {squares: Array(9).fill("  "), xIsNext: true};

function PlayTicTacToeConsole(board) {
    while (DetermineWinner(board) == 0 && board.squares.includes("  ")) {
        let promptMessage = returnBoardForPrompt(board);
        let userInput = prompt(promptMessage);
        if (userInput == "stop") {
            break;
        }
        let selectedIndex = ConvertCoordinateToArrayIndex(userInput);
        addPlayerInputToSpecifiedIndex(board, selectedIndex);
    }

    let resultMessage = returnResult(board);
    alert(resultMessage);
}