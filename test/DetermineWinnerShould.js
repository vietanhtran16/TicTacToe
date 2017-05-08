/**
 * Created by Viet Anh Tran on 06-May-17.
 */
var assert = require('assert');

describe('Add player input to array', function () {
    it("Add player input based on specified index - index 3", function () {
        let expected = {squares: [null, null, null, "X", null, null, null, null, null,], xIsNext: false};
        let squareInfo = Array(9).fill(null);
        let actual = addPlayerInputToSpecifiedIndex({squares: squareInfo, xIsNext: true}, 3);
        assert.deepEqual(expected, actual);
    });

    it("Add player input based on specified index - index 6", function () {
        let expected = {squares: [null, null, null, null, null, null, "X", null, null,], xIsNext: false};
        let squareInfo = Array(9).fill(null);
        let actual = addPlayerInputToSpecifiedIndex({squares: squareInfo, xIsNext: true}, 6);
        assert.deepEqual(expected, actual);
    });

    it("Update xIsNext property after adding player input", function () {
        let expected = {squares: [null, null, "X", null, null, null, null, null, null,], xIsNext: false};
        let squareInfo = Array(9).fill(null);
        let actual = addPlayerInputToSpecifiedIndex({squares: squareInfo, xIsNext: true}, 2);
        assert.deepEqual(expected, actual);
    });

    it("Add player input and update xIsNext property when xIsNext is false", function () {
        let expected = {squares: [null, null, "X", "O", null, "X", "O", null, null,], xIsNext: true};
        let squareInfo = [null, null, "X", "O", null, "X", null, null, null,];
        let actual = addPlayerInputToSpecifiedIndex({squares: squareInfo, xIsNext: false}, 6);
        assert.deepEqual(expected, actual);
    });

    it("Add player input and update xIsNext property when xIsNext is true", function () {
        let expected = {squares: [null, "X", null, "X", null, "O", "X", "O", null], xIsNext: false};
        let squareInfo = [null, null, null, "X", null, "O", "X", "O", null];
        let actual = addPlayerInputToSpecifiedIndex({squares: squareInfo, xIsNext: true}, 1);
        assert.deepEqual(expected, actual);
    });

});



describe("Get all indexes of most recent player input",function () {
    it("Get all indexes of most recent player input which is O",function () {
        let expect = [1,3];
        let squares = ["X", "O", null, "O", "X", null, null, null, null];
        let actual = GetAllIndexOfRecentInput({squares: squares, xIsNext: true});
        assert.deepEqual(expect, actual);
    });

    it("Get all indexes of most recent player input which is X",function () {
        let expect = [0, 2, 5];
        let squares = ["X", "O", "X", "O", null, "X", null,null,null];
        let actual = GetAllIndexOfRecentInput({squares: squares, xIsNext: false});
        assert.deepEqual(expect, actual);
    });

    it("Get all indexes of most recent player input which is O",function () {
        let expect = [1, 3, 7];
        let squares = ["X", "O", "X", "O", "X", null, null,"O", null];
        let actual = GetAllIndexOfRecentInput({squares: squares, xIsNext: true});
        assert.deepEqual(expect, actual);
    })
});

function addPlayerInputToSpecifiedIndex(squareInfo, specifiedIndex) {
    if(squareInfo.xIsNext == true)
    {
        squareInfo.squares[specifiedIndex] = "X";
    }
    else
    {
        squareInfo.squares[specifiedIndex] = "O";
    }
    squareInfo.xIsNext = !squareInfo.xIsNext;
    return squareInfo;
}

function GetAllIndexOfRecentInput(squaresInfo){
    let latestPlayerInput = squaresInfo.xIsNext ? "O" : "X";
    let indexOfLatestPlayerInput = [];
    for(let counter = 0; counter < squaresInfo.squares.length; counter++)
    {
        if(squaresInfo.squares[counter] == latestPlayerInput)
        {
            indexOfLatestPlayerInput.push(counter);
        }
    }
    return indexOfLatestPlayerInput;
}

