class Player {
    constructor() {
        this.speed = 10;
        this.position = { x: 0, y: window.innerHeight / 2 };
        this.element = null;
    }

    render() {
        const playerElement = document.createElement("div");
        playerElement.className = "player";
        document.body.appendChild(playerElement);
        this.element = playerElement;
    }

    move(keyCode) {
        console.log(keyCode);
        const step = this.speed;

        switch (keyCode) {
            case "ArrowUp":
                this.position.y -= step;
                break;
            case "ArrowDown":
                this.position.y += step;
                break;
            case "ArrowLeft":
                this.position.x -= step;
                break;
            case "ArrowRight":
                this.position.x += step;
                break;
            default:
                break;
        }

        this.element.style.left = this.position.x + "px";
        this.element.style.top = this.position.y + "px";
    }
}
