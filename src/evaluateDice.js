class ScoreOfThrow {
    constructor(dice) {
        this.dice = dice;
        this.score = {
            1: this.evaluateSameDice(1),
            2: this.evaluateSameDice(2),
            3: this.evaluateSameDice(3),
            4: this.evaluateSameDice(4),
            5: this.evaluateSameDice(5),
            6: this.evaluateSameDice(6),
            "threeOfAKind": this.evaluateSameOfAKind(3),
            "fourOfAKind": this.evaluateSameOfAKind(4),
            "fullHouse": this.evaluateFullHouse(),
            "smallStraight": this.evaluateSmallStraight(),
            "largeStraight": this.evaluateLargeStraight(),
            "yahtzee": this.evaluateYahtzee(),
            "chance": this.evaluateChance()
        };
    }

    getScore() { return this.score; }

    getSpecificScore(category) { return this.score[category]; }

    evaluateSameDice(numberOfSpots) {
        return numberOfSpots * this.countSameDice(numberOfSpots);
    }


    evaluateSameOfAKind(numberOfAKind) {
        if (this.containsAtLeastNumberOfAKind(numberOfAKind)) {
            return this.sumOfDice();
        } else {
            return 0;
        }
    }

    evaluateFullHouse() {
        if (this.containsFullHouse()) {
            return 25;
        } else {
            return 0;
        }
    }

    evaluateYahtzee() {
        if (this.containsYahtzee()) {
            return 50;
        } else {
            return 0;
        }
    }

    evaluateChance() {
        return this.sumOfDice();
    }

    evaluateSmallStraight() {
        if (this.containsSmallStraight()) {
            return 30;
        } else {
            return 0;
        }
    }

    evaluateLargeStraight() {
        if (this.containsLargeStraight()) {
            return 40;
        } else {
            return 0;
        }
    }

    countSameDice(numberOfSpots) {
        var counter = 0;
        this.dice.forEach(d => {
            if (d == numberOfSpots) {
                counter++;
            }
        });

        return counter;
    }

    containsAtLeastNumberOfAKind(numberOfAKind) {
        var result = false;
        this.dice.forEach(d => {
            if (this.countSameDice(d) >= numberOfAKind) {
                result = true;
            }
        })

        return result;
    }

    getCountsOfEachNumber() {
        var SpotsOnDice = 6;
        var result = Array(SpotsOnDice).fill(0);
        for (let i = 0; i < result.length; i++) {
            result[i] = this.countSameDice(i + 1);
        }

        return result;
    }

    containsFullHouse() {
        var countsEachDice = this.getCountsOfEachNumber();
        countsEachDice.sort();
        let numberOfDice = countsEachDice.length;
        if (countsEachDice[numberOfDice - 1] == 3 && countsEachDice[numberOfDice - 2] == 2) {
            return true;
        } else {
            return false;
        }
    }

    containsYahtzee() {
        let countsEachDice = this.getCountsOfEachNumber();
        countsEachDice.sort();
        if (countsEachDice[countsEachDice.length - 2] == 0) {
            return true;
        } else {
            return false;
        }
    }

    containsSmallStraight() {
        return this.dice.includes(3)
            && this.dice.includes(4)
            && ((this.dice.includes(1) && this.dice.includes(2))
                || (this.dice.includes(2) && this.dice.includes(5))
                || (this.dice.includes(5) && this.dice.includes(6)));
    }

    containsLargeStraight() {
        return (this.dice.includes(2)
            && this.dice.includes(3)
            && this.dice.includes(4)
            && this.dice.includes(5)
            && (this.dice.includes(1) || this.dice.includes(6)));
    }

    sumOfDice() {
        var result = 0;
        this.dice.forEach(d => {
            result += d;
        });

        return result;
    }

}