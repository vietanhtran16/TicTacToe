/**
 * Created by Viet Anh Tran on 06-May-17.
 */
var assert = require('assert');

describe('Add player input to array', function () {
    it("Add player input based on specified index - index 3", function () {
        let expected = {squares: [null, null, null,
                                  "X", null, null,
                                  null, null, null,],
                                  xIsNext: false};
        let squares = Array(9).fill(null);
        let actual = addPlayerInputToSpecifiedIndex({squares: squares, xIsNext: true}, 3);
        assert.deepEqual(expected, actual);
    });

    it("Add player input based on specified index - index 6", function () {
        let expected = {squares: [null, null, null,
                                  null, null, null,
                                  "X", null, null,],
                                  xIsNext: false};
        let squares = Array(9).fill(null);
        let actual = addPlayerInputToSpecifiedIndex({squares: squares, xIsNext: true}, 6);
        assert.deepEqual(expected, actual);
    });

    it("Update xIsNext property after adding player input", function () {
        let expected = {squares: [null, null, "X",
                                  null, null, null,
                                  null, null, null,],
                                  xIsNext: false};
        let squares = Array(9).fill(null);
        let actual = addPlayerInputToSpecifiedIndex({squares: squares, xIsNext: true}, 2);
        assert.deepEqual(expected, actual);
    });

    it("Add player input and update xIsNext property when xIsNext is false", function () {
        let expected = {squares: [null, null, "X",
                                  "O", null, "X",
                                  "O", null, null,],
                                  xIsNext: true};
        let squares = [null, null, "X",
                       "O", null, "X",
                       null, null, null,];
        let actual = addPlayerInputToSpecifiedIndex({squares: squares, xIsNext: false}, 6);
        assert.deepEqual(expected, actual);
    });

    it("Add player input and update xIsNext property when xIsNext is true", function () {
        let expected = {squares: [null, "X", null,
                                  "X", null, "O",
                                  "X", "O", null],
                                  xIsNext: false};
        let squares = [null, null, null,
                       "X", null, "O",
                       "X", "O", null];
        let actual = addPlayerInputToSpecifiedIndex({squares: squares, xIsNext: true}, 1);
        assert.deepEqual(expected, actual);
    });

    it("Player cannot select square which already has a value - Test 1", function (){
        let expected = {squares: [null, "X", null,
                                 "X", null, "O",
                                 "X", "O", null],
                                 xIsNext: false};
        let squares = [null, "X", null,
                       "X", null, "O",
                       "X", "O", null];
        let actual = addPlayerInputToSpecifiedIndex({squares: squares, xIsNext: false}, 1);
        assert.deepEqual(expected, actual);
    });

    it("Player cannot select square which already has a value - Test 2", function (){
        let expected = {squares: [null, "X", null,
                                  "X", null, "O",
                                  "X", "O", null],
                                  xIsNext: false};
        let squares = [null, "X", null,
                       "X", null, "O",
                       "X", "O", null];
        let actual = addPlayerInputToSpecifiedIndex({squares: squares, xIsNext: false}, 7);
        assert.deepEqual(expected, actual);
    });

    it("Player cannot select square which already has a value - Test 2", function (){
        let expected = {squares: [null, "X", null,
                                  "X", null, "O",
                                  "X", "O", null],
                                  xIsNext: false};
        let squares = [null, "X", null,
                       "X", null, "O",
                       "X", "O", null];
        let actual = addPlayerInputToSpecifiedIndex({squares: squares, xIsNext: false}, 3);
        assert.deepEqual(expected, actual);
    });

});



describe("Get all indexes of most recent player input",function () {
    it("Get all indexes of most recent player input which is O",function () {
        let expect = [1,3];
        let squares = ["X", "O", null,
                       "O", "X", null,
                       null, null, null];
        let actual = GetAllIndexOfRecentInput({squares: squares, xIsNext: true});
        assert.deepEqual(expect, actual);
    });

    it("Get all indexes of most recent player input which is X",function () {
        let expect = [0, 2, 5];
        let squares = ["X", "O", "X",
                       "O", null, "X",
                       null,null,null];
        let actual = GetAllIndexOfRecentInput({squares: squares, xIsNext: false});
        assert.deepEqual(expect, actual);
    });

    it("Get all indexes of most recent player input which is O",function () {
        let expect = [1, 3, 7];
        let squares = ["X", "O", "X",
                       "O", "X", null,
                       null,"O", null];
        let actual = GetAllIndexOfRecentInput({squares: squares, xIsNext: true});
        assert.deepEqual(expect, actual);
    })
});

describe("Determine if most recent input has won or not",function () {
    it("Return null since most recent input did not win", function () {
        let expect = 0;
        let squares = [null, "X", "O",
                       null, "O", "X",
                       null, null,null];
        let actual = DetermineWinner({squares: squares, xIsNext: true });
        assert.equal(expect, actual);
    });

    it("Return winning input when it has won the game - winner line [0,1,2]", function () {
        let expect = "X";
        let squares = ["X", "X", "X",
                       null, "O", "O",
                       null, null,null];
        let actual = DetermineWinner({squares: squares, xIsNext: false });
        assert.equal(expect, actual);
    });

    it("Return winning input when it has won the game - winner line [3,4,5]", function () {
        let expect = "O";
        let squares = ["O", "X", "X",
                       "O", "O", "O",
                       "X", null,null];
        let actual = DetermineWinner({squares: squares, xIsNext: true });
        assert.equal(expect, actual);
    });

    it("Return winning input when it has won the game - winner line [6,7,8]", function () {
        let expect = "X";
        let squares = ["O", null, null,
                       null, "O", null,
                       "X", "X","X"];
        let actual = DetermineWinner({squares: squares, xIsNext: false });
        assert.equal(expect, actual);
    });

    it("Return winning input when it has won the game - winner line [0,3,6]", function () {
        let expect = "O";
        let squares = ["O", "X", "X",
                       "O", "X", null,
                       "O", null,null];
        let actual = DetermineWinner({squares: squares, xIsNext: true });
        assert.equal(expect, actual);
    });

    it("Return winning input when it has won the game - winner line [1,4,7]", function () {
        let expect = "O";
        let squares = [null, "O", "X",
                       null, "O", null,
                       "X",  "O", "X"];

        let actual = DetermineWinner({squares: squares, xIsNext: true });
        assert.equal(expect, actual);
    });

    it("Return winning input when it has won the game - winner line [2,5,8]", function () {
        let expect = "X";
        let squares = [null, "O", "X",
                       null, "O", "X",
                       null, null,"X"];
        let actual = DetermineWinner({squares: squares, xIsNext: false });
        assert.equal(expect, actual);
    });

    it("Return winning input when it has won the game - winner line [0,4,8]", function () {
        let expect = "X";
        let squares = ["X", "O", null,
                       null, "X", "O",
                       null, null,"X"];
        let actual = DetermineWinner({squares: squares, xIsNext: false });
        assert.equal(expect, actual);
    });

    it("Return winning input when it has won the game - winner line [2,4,6]", function () {
        let expect = "O";
        let squares = [null, "X", "O",
                       "X", "O", null,
                       "O", "X",null];
        let actual = DetermineWinner({squares: squares, xIsNext: true });
        assert.equal(expect, actual);
    });
});

describe("Convert square coordinates to squares array index. Here is an example of the board\n" +
    " |1|2|3|\n" +
    "1|0|1|2|\n" +
    "2|3|4|5|\n" +
    "3|6|7|8|", function(){
   it("Convert 1,1 coordinate to correct index - 0", function () {
       let expect = 0;
       let input = "1,1";
       let actual = ConvertCoordinateToArrayIndex(input);
       assert.equal(expect, actual);
   });

    it("Convert 2,1 coordinate to correct index - 3", function () {
        let expect = 3;
        let input = "2,1";
        let actual = ConvertCoordinateToArrayIndex(input);
        assert.equal(expect, actual);
    });

    it("Convert 3,2 coordinate to correct index - 7", function () {
        let expect = 7;
        let input = "3,2";
        let actual = ConvertCoordinateToArrayIndex(input);
        assert.equal(expect, actual);
    });

    it("Convert 2,3 coordinate to correct index - 5", function () {
        let expect = 5;
        let input = "2,3";
        let actual = ConvertCoordinateToArrayIndex(input);
        assert.equal(expect, actual);
    });

    it("Convert 1,3 coordinate to correct index - 2", function () {
        let expect = 2;
        let input = "1,3";
        let actual = ConvertCoordinateToArrayIndex(input);
        assert.equal(expect, actual);
    });

    it("Convert 2,2 coordinate to correct index - 4", function () {
        let expect = 4;
        let input = "2,2";
        let actual = ConvertCoordinateToArrayIndex(input);
        assert.equal(expect, actual);
    });

    it("Convert 3,1 coordinate to correct index - 6", function () {
        let expect = 6;
        let input = "3,1";
        let actual = ConvertCoordinateToArrayIndex(input);
        assert.equal(expect, actual);
    });

});

function addPlayerInputToSpecifiedIndex(board, specifiedIndex) {
    if (board.squares[specifiedIndex]) {
        return board;
    } else {
        board.squares[specifiedIndex] = board.xIsNext ? "X" : "O";
        board.xIsNext = !board.xIsNext;
        return board;
    }
}

function GetAllIndexOfRecentInput(board){
    let latestPlayerInput = board.xIsNext ? "O" : "X";
    let indexOfLatestPlayerInput = [];
    for(let counter = 0; counter < board.squares.length; counter++)
    {
        if(board.squares[counter] == latestPlayerInput)
        {
            indexOfLatestPlayerInput.push(counter);
        }
    }
    return indexOfLatestPlayerInput;
}

function DetermineWinner(board) {
    const winnerLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let allIndexesOfLatestPlayerInput = GetAllIndexOfRecentInput(board);
    for(let winnerLine of winnerLines)
    {
       if(allIndexesOfLatestPlayerInput.includes(winnerLine[0]) && allIndexesOfLatestPlayerInput.includes(winnerLine[1]) && allIndexesOfLatestPlayerInput.includes(winnerLine[2]))
       {
           return board.xIsNext ? "O" : "X";
       }

    }
    return 0;
}

function GetCoordinates(input) {
    let coordinateInput = input.split(',');
    let rowCoordinate = coordinateInput[0];
    let columnCoordinate = coordinateInput[1];
    return {rowCoordinate, columnCoordinate};
}
function ConvertCoordinateToArrayIndex(input){
    let {rowCoordinate, columnCoordinate} = GetCoordinates(input);
    let startingIndexOfArray = 0;
    let squareSize = 3;
    let startingIndexOfSpecifiedRow = startingIndexOfArray + (squareSize * (rowCoordinate - 1));
    let indexWithinSpecifiedRow = (columnCoordinate - 1);

    return startingIndexOfSpecifiedRow + indexWithinSpecifiedRow;
}

