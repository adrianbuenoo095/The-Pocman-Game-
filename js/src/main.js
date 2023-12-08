

window.addEventListener('DOMContentLoaded', () => {
    console.log("loaded");
    const game = new Game();
    const startGameButton = document.getElementById("start-game");
    const gameScreen = document.getElementById("game-screen");
    const startGame = document.getElementById("splash-screen");
    startGame.classList.remove("hidden");


    startGameButton.addEventListener("click", (event) => {
        startGame.classList.add("hidden");
        gameScreen.classList.remove("hidden");
        game.start();
    });

    document.addEventListener("keydown", (event) => {
        switch (event.code) {
            case "ArrowUp":
                game.player.directionY = -1;
                break;
            case "ArrowDown":
                game.player.directionY = 1;
                break;
            case "ArrowLeft":
                game.player.directionX = -1;
                break;
            case "ArrowRight":
                game.player.directionX = 1;
                break;
            default:
                break;
        }

    });

    document.addEventListener("keyup", (event) => {
        switch (event.code) {
            case "ArrowUp":
            case "ArrowDown":
                game.player.directionY = 0;
                break;
            case "ArrowRight":
            case "ArrowLeft":
                game.player.directionX = 0;
                break;
            default:
                break;
        }
    })
});