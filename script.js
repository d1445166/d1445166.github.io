const BOARD_SIZE = 15;
let board = [];
let currentPlayer = 1; // 1 for Black, 2 for White
let gameOver = false;

const boardElement = document.getElementById('board');
const statusElement = document.getElementById('status');
const restartBtn = document.getElementById('restart-btn');

function initGame() {
    // Array of 15x15 filled with 0
    board = Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(0));
    currentPlayer = 1;
    gameOver = false;
    
    // Clear DOM
    boardElement.innerHTML = '';
    boardElement.className = 'turn-black';
    
    updateStatus();

    // Create cells
    for (let r = 0; r < BOARD_SIZE; r++) {
        for (let c = 0; c < BOARD_SIZE; c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            cell.addEventListener('click', handleCellClick);
            boardElement.appendChild(cell);
        }
    }
}

function handleCellClick(e) {
    if (gameOver) return;

    const cell = e.currentTarget;
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);

    // If cell already has a piece, do nothing
    if (board[row][col] !== 0) return;

    // Place piece
    board[row][col] = currentPlayer;
    cell.classList.add('has-piece');
    
    const piece = document.createElement('div');
    piece.classList.add('piece');
    piece.classList.add(currentPlayer === 1 ? 'black' : 'white');
    cell.appendChild(piece);

    // Check win condition
    if (checkWin(row, col, currentPlayer)) {
        gameOver = true;
        updateStatus(true);
        return;
    }

    // Switch turns
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    boardElement.className = currentPlayer === 1 ? 'turn-black' : 'turn-white';
    updateStatus();
}

function updateStatus(isWin = false) {
    if (isWin) {
        const winner = currentPlayer === 1 ? '黑子' : '白子';
        statusElement.innerHTML = `🎉 遊戲結束：<span class="win-text">${winner} 獲勝！</span> 🎉`;
    } else {
        const colorClass = currentPlayer === 1 ? 'black-turn' : 'white-turn';
        const colorName = currentPlayer === 1 ? '黑子' : '白子';
        statusElement.innerHTML = `當前輪到：<span id="current-player" class="${colorClass}">${colorName}</span>`;
    }
}

function checkWin(row, col, player) {
    const directions = [
        [0, 1],  // Horizontal
        [1, 0],  // Vertical
        [1, 1],  // Diagonal \
        [1, -1]  // Anti-Diagonal /
    ];

    for (const [dr, dc] of directions) {
        // Start count at 1 (the piece just placed)
        let count = 1;

        // Check one direction
        count += countConsecutive(row, col, dr, dc, player);
        // Check opposite direction
        count += countConsecutive(row, col, -dr, -dc, player);

        if (count >= 5) {
            return true;
        }
    }
    return false;
}

function countConsecutive(row, col, dr, dc, player) {
    let count = 0;
    let r = row + dr;
    let c = col + dc;

    // Keep checking as long as it's within bounds and matches the player color
    while (r >= 0 && r < BOARD_SIZE && c >= 0 && c < BOARD_SIZE && board[r][c] === player) {
        count++;
        r += dr;
        c += dc;
    }
    return count;
}

// Bind restart event
restartBtn.addEventListener('click', initGame);

// Load game initially
initGame();
