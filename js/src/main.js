const startButton = document.getElementById("start-game");
const showRulesButton = document.getElementById("showRules");
const closeRulesButton = document.getElementById("closeRules");
const returnToStartWinButton = document.getElementById("returnToStartWin");
const returnToStartLoseButton = document.getElementById("returnToStartLose");

const startScreen = document.getElementById("app");
const rulesModal = document.getElementById("rulesModal");
const winPage = document.getElementById("winPage");
const losePage = document.getElementById("losePage");


window.addEventListener("load", () => {
    startScreen.classList.remove("hidden");
});

startButton.addEventListener("click", () => {
    startScreen.classList.add("hidden");

});

showRulesButton.addEventListener("click", () => {
    rulesModal.classList.remove("hidden");
});

closeRulesButton.addEventListener("click", () => {
    rulesModal.classList.add("hidden");
});

returnToStartWinButton.addEventListener("click", () => {
    winPage.classList.add("hidden");
    startScreen.classList.remove("hidden");

});

returnToStartLoseButton.addEventListener("click", () => {
    losePage.classList.add("hidden");
    startScreen.classList.remove("hidden");

});