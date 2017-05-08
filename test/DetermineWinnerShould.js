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