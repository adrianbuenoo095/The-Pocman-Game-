const closeRulesButton = document.getElementById("close-rules");
const splash = document.getElementById("splash-screen");
const startButton = document.getElementById("start-game");
const gameBoard = document.getElementById("game-board")
const rulesModal = document.getElementById("rules-model");
const winPage = document.getElementById("winPage");
const losePage = document.getElementById("losePage");


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
    winPage.classList.add("hidden");
    splash.classList.remove("hidden");

});

returnToStartLoseButton.addEventListener("click", () => {
    losePage.classList.add("hidden");
    splash.classList.remove("hidden");

});

const player = new Player();
