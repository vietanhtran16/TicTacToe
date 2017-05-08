/**
 * Created by Viet Anh Tran on 06-May-17.
 */
var assert = require('assert');

describe('Add player input to array', function() {
        it("Add player input based on specified index",function () {
            let expected = Array(9).fill(null);
            expected[3] = "X";
            let squareInfo = Array(9).fill(null);
            let actual = addPlayerInputToSpecifiedIndex(squareInfo, 3);
            assert.deepEqual(expected, actual);
        });

    it("Add player input based on specified index - second test", function () {
        let expected = Array(9).fill(null);
        expected[4] = "X";
        let squareInfo = Array(9).fill(null);
        let actual = addPlayerInputToSpecifiedIndex(squareInfo,4);
        assert.deepEqual(expected, actual);
    });

});


describe("Check whether latest player input is X or not ", function () {
    it("Latest input is X", function () {
        let expected = true;
        let squares = ["O", "X", "O", "X"];
        let actual = LastInputIsX(squares);
        assert.equal(expected, actual);
    })

    it("Latest input is not X", function () {
        let expected = false;
        let squares = ["O", "X", "O"];
        let actual = LastInputIsX(squares);
        assert.equal(expected, actual);
    })
});

describe("Determine winner based on stored player inputs",function () {
    it("Get all indexes of most recent player input",function () {
        let expect = [0, 2 ,4];
        let squares = ["X", "O", "X", "O", "X"];
        let actual = VerifyWinner(squares);
        assert.deepEqual(expect, actual);
    })

    it("Get all indexes of most recent player input - second test",function () {
        let expect = [1, 3];
        let squares = ["X", "O", "X", "O"];
        let actual = VerifyWinner(squares);
        assert.deepEqual(expect, actual);
    })

    it("Get all indexes of most recent player input - again",function () {
        let expect = [0, 2, 4];
        let squares = ["X", "O", "X", "O", "X"];
        let actual = VerifyWinner(squares);
        assert.deepEqual(expect, actual);
    })
})



function addPlayerInput(squares) {
    if(LastInputIsX(squares))
    {
        squares.push("O");
    }
    else
    {
        squares.push("X");
    }
    return squares;
}

function LastInputIsX(squares) {
    return squares[squares.length - 1] == "X";
}

function VerifyWinner(squares){
    let latestPlayerInput = squares[squares.length - 1];
    let indexOfLatestPlayerInput = [];
    for(let counter = 0; counter < squares.length; counter++)
    {
        if(squares[counter] == latestPlayerInput)
        {
            indexOfLatestPlayerInput.push(counter);
        }
    }
    return indexOfLatestPlayerInput;
}

function addPlayerInputToSpecifiedIndex(squareInfo, specifiedIndex) {
    squareInfo[specifiedIndex] = "X";
    return squareInfo;
}