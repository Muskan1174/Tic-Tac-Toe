let currentPlayer = "X";
let arr = Array(9).fill(null);
let gameOver = false;

function checkWinner() {
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    for (let combo of winCombos) {
        const [a, b, c] = combo;
        if (arr[a] && arr[a] === arr[b] && arr[b] === arr[c]) {
            setStatus(`🎉 Winner is ${currentPlayer}!`);
            gameOver = true;
            return;
        }
    }

    if (!arr.includes(null)) {
        setStatus("😅 It's a draw!");
        gameOver = true;
    }
}

function handleClick(el) {
    const id = Number(el.id);
    if (arr[id] !== null || gameOver) return;

    arr[id] = currentPlayer;
    el.innerText = currentPlayer;

    checkWinner();

    if (!gameOver) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        setStatus(`Player ${currentPlayer}'s Turn`);
    }
}

function resetGame() {
    arr.fill(null);
    currentPlayer = "X";
    gameOver = false;
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = "");
    setStatus(`Player ${currentPlayer}'s Turn`);
}

function setStatus(message) {
    document.getElementById("status").innerText = message;
}
