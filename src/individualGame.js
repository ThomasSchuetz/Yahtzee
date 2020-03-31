class individualGame {
    constructor() {
        this.score = {
            1: null,
            2: null,
            3: null,
            4: null,
            5: null,
            6: null,
            "threeOfAKind": null,
            "fourOfAKind": null,
            "fullHouse": null,
            "smallStraight": null,
            "largeStraight": null,
            "yahtzee": null,
            "chance": null
        };
    }

    saveScore(category, currentScore) {
        if (category in this.score) {
            if (this.score[category] == null) {
                this.score[category] = currentScore;
            } else {
                throw new Error(`Category ${category} has already been played.\n` +
                    `The previous result was ${this.score[category]} points.`);
            }
        }
        else {
            throw new Error(`There is no scoring category called ${category}`);
        }
    }

    getScores() {
        return this.score;
    }

    getTotalPoints() {
        return this.calculateLowerHalf() + this.calculateUpperHalf();
    }

    getBonus() {
        if (this.calculateNumberThrows() >= 63) {
            return 35;
        } else {
            return 0;
        }
    }

    calculateNumberThrows() {
        var result = 0;
        for (let i = 1; i <= 6; i++) {
            if (this.score[i] != null) {
                result += this.score[i];
            }
        }
        return result;
    }

    calculateUpperHalf() {
        return this.calculateNumberThrows() + this.getBonus();
    }

    calculateLowerHalf() {
        var keys = ["threeOfAKind", "fourOfAKind",
            "smallStraight", "largeStraight",
            "fullHouse", "yahtzee", "chance"];
        var result = 0;

        keys.forEach(key => {
            result += this.score[key];
        });

        return result;
    }
}