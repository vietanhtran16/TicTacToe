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
});