/**
 * Created by Viet Anh Tran on 06-May-17.
 */
function addPlayerInputToSpecifiedIndex(board, specifiedIndex) {
    if (board.squares[specifiedIndex].isNullOrWhiteSpaces()) {
        board.squares[specifiedIndex] = board.xIsNext ? "X" : "O";
        board.xIsNext = !board.xIsNext;
        return board;
    } else {
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