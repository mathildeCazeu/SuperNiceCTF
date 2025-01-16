const gameBoard = document.querySelector(".game-board");
const message = document.querySelector(".message");
const restartBtn = document.querySelector(".restart-btn");

let currentPlayer = "X";
let board = Array(9).fill(null); // Tableau pour suivre l'état du jeu
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Lignes
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colonnes
    [0, 4, 8], [2, 4, 6]             // Diagonales
];

// Initialisation du jeu
function initializeGame() {
    board.fill(null);
    gameBoard.querySelectorAll(".cell").forEach(cell => {
        cell.textContent = "";
        cell.style.backgroundColor = "#fff";
    });
    message.textContent = `C'est au tour de ${currentPlayer}`;
    currentPlayer = "X";
}

// Vérifier si un joueur a gagné
function checkWin() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]; // Retourne le joueur gagnant (X ou O)
        }
    }
    return null; // Pas de gagnant
}

// Vérifier si le plateau est plein (match nul)
function checkDraw() {
    return board.every(cell => cell !== null);
}

// Gérer le clic sur une cellule
function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute("data-index");

    if (board[index] || checkWin()) return; // Ne rien faire si la cellule est déjà occupée ou si le jeu est terminé

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    const winner = checkWin();
    if (winner) {
        message.textContent = `Le joueur ${winner} a gagné !`;
        highlightWinningCells(winner);
        return;
    }

    if (checkDraw()) {
        message.textContent = "Match nul ! Clé : 5- Kj4M🗝️"; // Ajout de la clé en cas de match nul
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    message.textContent = `C'est au tour de ${currentPlayer}`;
}

// Mettre en évidence les cellules gagnantes
function highlightWinningCells(winner) {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] === winner && board[b] === winner && board[c] === winner) {
            gameBoard.querySelector(`.cell[data-index="${a}"]`).style.backgroundColor = "#aaffaa";
            gameBoard.querySelector(`.cell[data-index="${b}"]`).style.backgroundColor = "#aaffaa";
            gameBoard.querySelector(`.cell[data-index="${c}"]`).style.backgroundColor = "#aaffaa";
        }
    }
}

// Redémarrer le jeu
restartBtn.addEventListener("click", initializeGame);

// Ajouter des écouteurs d'événements aux cellules
gameBoard.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("click", handleCellClick);
});

// Initialiser le jeu au chargement de la page
initializeGame();