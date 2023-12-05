class Player {
    constructor(skill) {
        this.speed = 0;
        this.health = 100;
        this.skill = skill;
        this.position = { x: 0, y: 0 }
    }

    interact(element) {

    }

    takeDamage(amount) {
        this.health -= amount;
    }

    heal(amount) {
        this.health += Math.min(100, this.health + amount);
    }

    startOver() {
        this.position = { x: 0, y: 0 };
        this.health = 100;
    }

}