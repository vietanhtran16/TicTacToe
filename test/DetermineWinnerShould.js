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
        let expect = null;
        let squares = [null, "X", "O",
                       null, "O", "X",
                       null, null,null];
        let actual = DeterminWinner({squares: squares, xIsNext: true });
        assert.equal(expect, actual);
    });

    it("Return winning input when it has won the game - winner line [0,1,2]", function () {
        let expect = "X";
        let squares = ["X", "X", "X",
                       null, "O", "O",
                       null, null,null];
        let actual = DeterminWinner({squares: squares, xIsNext: false });
        assert.equal(expect, actual);
    });

    it("Return winning input when it has won the game - winner line [3,4,5]", function () {
        let expect = "O";
        let squares = ["O", "X", "X",
                       "O", "O", "O",
                       "X", null,null];
        let actual = DeterminWinner({squares: squares, xIsNext: true });
        assert.equal(expect, actual);
    });

    it("Return winning input when it has won the game - winner line [6,7,8]", function () {
        let expect = "X";
        let squares = ["O", null, null,
                       null, "O", null,
                       "X", "X","X"];
        let actual = DeterminWinner({squares: squares, xIsNext: false });
        assert.equal(expect, actual);
    });

    it("Return winning input when it has won the game - winner line [0,3,6]", function () {
        let expect = "O";
        let squares = ["O", "X", "X",
                       "O", "X", null,
                       "O", null,null];
        let actual = DeterminWinner({squares: squares, xIsNext: true });
        assert.equal(expect, actual);
    });

    it("Return winning input when it has won the game - winner line [1,4,7]", function () {
        let expect = "O";
        let squares = [null, "O", "X",
                       null, "O", null,
                       "X",  "O", "X"];

        let actual = DeterminWinner({squares: squares, xIsNext: true });
        assert.equal(expect, actual);
    });

    it("Return winning input when it has won the game - winner line [2,5,8]", function () {
        let expect = "X";
        let squares = [null, "O", "X",
                       null, "O", "X",
                       null, null,"X"];
        let actual = DeterminWinner({squares: squares, xIsNext: false });
        assert.equal(expect, actual);
    });

    it("Return winning input when it has won the game - winner line [0,4,8]", function () {
        let expect = "X";
        let squares = ["X", "O", null,
                       null, "X", "O",
                       null, null,"X"];
        let actual = DeterminWinner({squares: squares, xIsNext: false });
        assert.equal(expect, actual);
    });

    it("Return winning input when it has won the game - winner line [2,4,6]", function () {
        let expect = "O";
        let squares = [null, "X", "O",
                       "X", "O", null,
                       "O", "X",null];
        let actual = DeterminWinner({squares: squares, xIsNext: true });
        assert.equal(expect, actual);
    });
});

describe("Convert square coordinates to squares array index", function(){
   it("Convert 1,1 coordinate to correct index - 0", function () {
       let expect = 0;
       let input = "1,1";
       let actual = ConvertCoorDinateToArrayIndex(input);
       assert.equal(expect, actual);
   })
});

function addPlayerInputToSpecifiedIndex(board, specifiedIndex) {
    board.squares[specifiedIndex] = board.xIsNext ? "X" : "O";
    board.xIsNext = !board.xIsNext;
    return board;
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

function DeterminWinner(board) {
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
    return null;
}

