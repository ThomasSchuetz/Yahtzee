describe("Individual game", () => {
    it("Saving score of undefined category results in error", () => {
        var game = new individualGame();
                    
        assert.throws(function() { game.saveScore("wrongCategory", 10) }, Error);
    });

    it("Saving score of already played category results in error", () => {
        var game = new individualGame();
        game.saveScore(1, 4);

        assert.throws(function() { game.saveScore(1, 2) }, Error);
    });

    it("Saved score can be retrieved later", () => {
        var game = new individualGame();
        game.saveScore(1, 4);

        assert.equal(4, game.score[1]);
    });

    it("Bonus is granted if at least 63 points are reached", () => {
        var game = new individualGame();
        game.saveScore(1, 3);
        game.saveScore(2, 6);
        game.saveScore(3, 9);
        game.saveScore(4, 12);
        game.saveScore(5, 15);
        game.saveScore(6, 18);

        assert.equal(35, game.getBonus());
    });

    it("Bonus is not granted if less than 63 points are reached", () => {
        var game = new individualGame();
        game.saveScore(1, 2);
        game.saveScore(2, 6);
        game.saveScore(3, 9);
        game.saveScore(4, 12);
        game.saveScore(5, 15);
        game.saveScore(6, 18);

        assert.equal(0, game.getBonus());
    });

    it("Perfect score is 375", () => {
        var game = new individualGame();
        game.saveScore(1, 5);
        game.saveScore(2, 10);
        game.saveScore(3, 15);
        game.saveScore(4, 20);
        game.saveScore(5, 25);
        game.saveScore(6, 30);
        game.saveScore("threeOfAKind", 30);
        game.saveScore("fourOfAKind", 30);
        game.saveScore("fullHouse", 25);
        game.saveScore("smallStraight", 30);
        game.saveScore("largeStraight", 40);
        game.saveScore("yahtzee", 50);
        game.saveScore("chance", 30);

        assert.equal(375, game.getTotalPoints());
    });
})