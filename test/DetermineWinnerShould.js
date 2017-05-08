/**
 * Created by Viet Anh Tran on 06-May-17.
 */
var assert = require('assert');

describe('Add player input to array', function() {
        it('Should return array when player input is X', function() {
            let expected = ["X"];
            let squares = [];
            let actual = addPlayerInput(squares);
            assert.deepEqual(expected, actual);
        });

        it('Insert O if the last input is X', function () {
            let expected = ["X", "O"];
            let squares = ["X"];
            let actual = addPlayerInput(squares);
            assert.deepEqual(expected, actual);
        })

        it('Insert X if the last input is O', function () {
            let expected = ["O", "X"];
            let squares = ["O"];
            let actual = addPlayerInput(squares);
            assert.deepEqual(expected, actual);
        })

});

describe("Add player input to squares array based on specified index",function () {
    it("Insert X to index 3 of array",function () {
        let expected = ["O","X","O","X","O","X","O","X","O"];
        let squares = ["O","X","O",null,"O","X","O","X","O"];
    })
})

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

function addPlayerInputToSpecifiedIndex(squares, specifiedIndex) {

}