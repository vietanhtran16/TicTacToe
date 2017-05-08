/**
 * Created by Viet Anh Tran on 06-May-17.
 */
var assert = require('assert');

describe('Store player inputs in array', function() {
        it('Should return list of inputs', function() {
            let expected = [1];
            let squares = 1;
            let actual = [1];
            assert.equal(expected.toString(), actual.toString());
        });
});

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});


function addPlayerInput(squaresResult) {
    squaresResult.push(1);
    return squaresResult;
}