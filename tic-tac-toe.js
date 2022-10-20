// Build out a 3x3 grid with clickable squares.
// When a user clicks on a square, mark the 
// square with the current user's token (alternating 
// with each click). You can add an X or an O 
// or some other marker that corresponds to the c
// urrent player.

// Once a square has been marked, a user should not be able to click it again to change it.
// Have a message somewhere in your UI to show who the current player is (i.e. Player 1 turn or Player 2 turn)
// Below your 3x3 grid, you should have a 'reset' button that will reset the game.

window.addEventListener('DOMContentLoaded', () => {
    const playerX = document.querySelector('.playerX')
    const playerO = document.querySelector('.playerO')
    const resetButton = document.querySelector('#reset')
    const announcement = document.querySelector('.winning-message')
    let cell = document.querySelector('#board')
    const squares = document.querySelector('.cell')

    let board = ['','', '', '', '', '', '', '',''];
    // 9 empty strings to be able to hold the board 
    let currentPlayer = 'X';
    // storing current player, can be either or
    let isGameActive = true;
    // stores if the game is active variable

    const playerXWon = 'Player X Won'
    const playerOWon = 'Player O Won'
    const tie = 'Tie'
    // These will hold out variables for when we make the announcement on which player won

    // [0][1][2]
    // [3][4][5]
    // [6][7][8]
    const winningConditions = [
        [0,1,2],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
    ];
    // calling out all of our winning conditions to be able to refer back to this later

    const userAction = (cell, board) => {
        if(isValidAction(cell) && isGameActive) {
            cell.innerText = currentPlayer;
            cell.classList.add(`player${currentPlayer}`);
            updateBoard(board);
            handleResultValidation();
            changePlayer();
        }
    }   



        squares.addEventListener('click', () => {
            squares.innerHTML = "X"
    })
    // resetButton.addEventListener('click', resetboard);
})