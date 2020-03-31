describe("Turn", () => {
    it("Throwing dice more than 3 times results in error", () => {
        var turn = new Turn();
        for (let i = 0; i < 3; i++) {
            turn.throwTheDice([]);
        }
            
        assert.throws(function() { turn.throwTheDice([]) }, Error, "The dice have already been thrown 3 times!");
    });

    it("Throwing dice results in 5 dice, each between 1 and 6", () => {
        var turn = new Turn();
        turn.throwTheDice([]);
        var dice = turn.showDice();

        assert.equal(5, dice.length);
        dice.forEach(d => {
            assert(d >= 1);
            assert(d <= 6);
        });      
    });
})