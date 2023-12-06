const closeRulesButton = document.getElementById("close-rules");
const showRulesButton = document.getElementById("show-rules");
const splash = document.getElementById("splash-screen");
const startButton = document.getElementById("start-game");
const gameBoard = document.getElementById("game-screen")
const rulesModal = document.getElementById("rules-model");
const wonScreen = document.getElementById("won-screen");
const gameOverScreen = document.getElementById("game-over-screen");


window.addEventListener("load", () => {
    splash.classList.remove("hidden");
});

startButton.addEventListener("click", () => {
    splash.classList.add("hidden");

});

showRulesButton.addEventListener("click", () => {
    rulesModal.classList.remove("hidden");
});

closeRulesButton.addEventListener("click", () => {
    rulesModal.classList.add("hidden");
});

returnToStartWinButton.addEventListener("click", () => {
    wonScreen.classList.add("hidden");
    splash.classList.remove("hidden");

});

returnToStartLoseButton.addEventListener("click", () => {
    gameOverScreen.classList.add("hidden");
    splash.classList.remove("hidden");

});

const player = new Player();
