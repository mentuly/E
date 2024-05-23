let isGameOver = false;
let scoreCounter = 0;
let scoreElement = document.getElementById('score-value');

function updateScore() {
    if (!isGameOver) {
        scoreCounter += 0.01;
        scoreElement.innerHTML = Math.round(scoreCounter);
    }
}
function isAlive() {
    if (isGameOver) {
        clearInterval(gameInterval);
        alert('Game Over! Your score: ' + Math.round(scoreCounter));
        scoreCounter = 0;
        scoreElement.innerHTML = Math.round(scoreCounter);
        return;
    }
    updateScore();
}
let gameInterval = setInterval(isAlive, 10);