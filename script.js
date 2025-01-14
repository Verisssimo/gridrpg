const players = {
    Gabriel: { x: 0, y: 0, color: "blue" },
    Vinícius: { x: 1, y: 0, color: "green" },
    João: { x: 2, y: 0, color: "purple" },
    Joãozinho: { x: 3, y: 0, color: "orange" },
    Froy: { x: 4, y: 0, color: "red" }
};

const grid = document.getElementById("grid");
const gridSize = 10;

// Cria o grid
for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.dataset.x = x;
        cell.dataset.y = y;
        grid.appendChild(cell);
    }
}

// Coloca os tokens no grid
function renderTokens() {
    document.querySelectorAll(".token").forEach(token => token.remove());
    for (const player in players) {
        const { x, y, color } = players[player];
        const cell = document.querySelector(.cell[data-x='${x}'][data-y='${y}']);
        const token = document.createElement("div");
        token.className = "token";
        token.style.backgroundColor = color;
        token.textContent = player[0]; // Primeira letra do nome do jogador
        token.addEventListener("click", () => moveToken(player));
        cell.appendChild(token);
    }
}

// Move os tokens
function moveToken(player) {
    const direction = prompt(Mover ${player} (w/a/s/d):);
    if (!direction) return;

    const { x, y } = players[player];
    if (direction === "w" && y > 0) players[player].y--;
    if (direction === "s" && y < gridSize - 1) players[player].y++;
    if (direction === "a" && x > 0) players[player].x--;
    if (direction === "d" && x < gridSize - 1) players[player].x++;

    renderTokens();
}

// Renderiza os tokens inicialmente
renderTokens();
