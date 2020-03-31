let numberOfDice = 5;
let maxThrows = 3;
let SpotsOnDice = 6;

class Turn {
    constructor() {
        this.dice = new Array(numberOfDice);
        this.numberOfThrows = 0;
    }

    throwTheDice(fixedIndices) {
        if (this.numberOfThrows < maxThrows) {
            for (let i = 0; i < this.dice.length; i++) {
                if (!fixedIndices.includes(i)) {
                    this.dice[i] = this.throwIndividualDice(SpotsOnDice);
                }
            }
            this.numberOfThrows++;
        }
        else {
            throw new Error("The dice have already been thrown " + maxThrows + " times!");
        }
    }

    showDice() {
        return this.dice;
    }

    throwIndividualDice(max = 6, min = 1) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
