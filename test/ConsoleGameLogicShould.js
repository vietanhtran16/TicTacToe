/**
 * Created by Viet Anh Tran on 15-Jun-17.
 */
var fs = require('fs');
var vm = require('vm');
var path = 'GameLogic/ConsoleGameLogic.js';

var code = fs.readFileSync(path);
vm.runInThisContext(code);

var assert = require('assert');

describe("Return current board to display on prompt", function () {
    it("Display empty board", function () {
        let expected = "Hey X, it is your turn. " +
            "Play the game by entering row-column coordinate of your squares. For example, 1,1 for top left squares" +
            "Here is what the board looks like " +
            "|1|2|3" +
            "1|  |  |  |" +
            "2|  |  |  |" +
            "3|  |  |  |";
        var board = {squares: Array(9).fill("  "), xIsNext: true};
        let actual = returnBoardForPrompt(board);
        assert.equal(expected, actual);
    });

    it("Display board which has user inputs", function () {
        let expected = "Hey O, it is your turn. " +
            "Play the game by entering row-column coordinate of your squares. For example, 1,1 for top left squares" +
            "Here is what the board looks like " +
            "|1|2|3" +
            "1|X|  |  |" +
            "2|X|O|  |" +
            "3|  |  |  |";
        let squares = ["X", "  ", "  ",
                       "X", "O", "  ",
                       "  ", "  ","  "];
        let actual = returnBoardForPrompt({squares: squares, xIsNext: false });
        assert.equal(expected, actual);
    });

    it("Display board which has user inputs - test again", function () {
        let expected = "Hey X, it is your turn. " +
            "Play the game by entering row-column coordinate of your squares. For example, 1,1 for top left squares" +
            "Here is what the board looks like " +
            "|1|2|3" +
            "1|X|O|X|" +
            "2|X|O|O|" +
            "3|  |  |  |";
        let squares = ["X", "O", "X",
                       "X", "O", "O",
                       "  ", "  ","  "];
        let actual = returnBoardForPrompt({squares: squares, xIsNext: true });
        assert.equal(expected, actual);
    });
});

describe("Return result message", function () {
    it("Return X is the winner", function () {
        let expected = "The winner is X";
        let squares = ["X", "O", "X",
                       "X", "O", "O",
                       "X", "  ","  "];
        let actual = returnResult({squares: squares, xIsNext: false });
        assert.equal(expected, actual);
    });
});