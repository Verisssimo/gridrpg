// script.js
const gridElement = document.getElementById('grid');
const gridSize = 10;
let tokens = {};

function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.dataset.index = i;
        gridElement.appendChild(cell);
    }
}

function createToken(color, id) {
    const token = document.createElement('div');
    token.classList.add('token');
    token.style.backgroundColor = color;
    token.dataset.id = id;
    token.draggable = true;

    token.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('tokenId', id);
    });

    return token;
}

function addToken(player) {
    const colors = {
        gabriel: 'blue',
        vinicius: 'green',
        joao: 'red',
        joaozinho: 'yellow',
        froy: 'purple',
        cinza: 'gray'
    };

    const tokenColor = colors[player];
    const tokenId = player + '-' + Date.now();
    const token = createToken(tokenColor, tokenId);

    tokens[tokenId] = { id: tokenId, color: tokenColor, position: -1 };
    
    const randomCellIndex = Math.floor(Math.random() * gridSize * gridSize);
    tokens[tokenId].position = randomCellIndex;
    
    const cell = gridElement.children[randomCellIndex];
    cell.appendChild(token);
}

function setupDraggableTokens() {
    gridElement.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    gridElement.addEventListener('drop', (e) => {
        const tokenId = e.dataTransfer.getData('tokenId');
        const token = document.querySelector(`[data-id="${tokenId}"]`);
        const targetCell = e.target;

        if (targetCell.dataset.index !== undefined) {
            const targetIndex = targetCell.dataset.index;
            const tokenData = tokens[tokenId];
            const currentCell = gridElement.children[tokenData.position];

            currentCell.removeChild(token);
            targetCell.appendChild(token);
            tokens[tokenId].position = targetIndex;
        }
    });
}

createGrid();
setupDraggableTokens();
