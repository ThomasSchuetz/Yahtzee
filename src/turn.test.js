const { Turn } = require('./turn');

describe("Turn", () => {
    test("Throwing dice more than 3 times results in error", () => {
        var turn = new Turn();
        for (let i = 0; i < 3; i++) {
            turn.throwTheDice([]);
        }
            
        expect(() => turn.throwTheDice([]).toThrowError("The dice have already been thrown 3 times!"));
    });

    test("Throwing dice results in 5 dice, each between 1 and 6", () => {
        var turn = new Turn();
        turn.throwTheDice([]);
        var dice = turn.showDice();

        dice.forEach(d => {
            expect(d).toBeGreaterThanOrEqual(1);
            expect(d).toBeLessThanOrEqual(6);
        });      
    });
})