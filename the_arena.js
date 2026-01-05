class Charactor {
    #hp
    #maxHp
    constructor(name, hp) {
        this.name = name;
        this.#hp = hp;
    }
    getHp() {
        return this.#hp
    }
    takeDamange(amount) {
        if(amount < this.#hp) {
            this.#hp -= amount
        } else {
            this.#hp = 0;
            console.log("The Charactor is dad")
        }
    }
    heal(amount) {
        if (amount > 0) {
            if (amount + this.#hp <= this.#maxHp) {
                this.#hp += amount;
            } else {
                this.#hp = this.#maxHp
            }
        }
    }
    attack(target) {
        console.log(`${this.name} doesnt know how to attack`)
    }
}

class Warrior extends Charactor {
    constructor(name) {
        super(name, 100)
        this.weapom = "Sword";
    }
    attack(target) {
        const damage = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
        console.log(`${this.name} attacks with ${this.weapon} for ${this.damage} damage!`);
        target.takeDamange(damage)
    }
}

class Mage extends Charactor {
    constructor(name) {
        super(name, 60)
        this.mana = 100
    }
}