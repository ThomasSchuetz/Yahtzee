describe("Evaluation", () => {
    it("All dice show the same spots results in Yahtzee", () => {
        var score = new ScoreOfThrow([1,1,1,1,1]);
            
        assert.equal(50, score.score.yahtzee);
        assert.equal(5, score.score[1]);
        assert.equal(5, score.score.chance);
        assert.equal(5, score.score.threeOfAKind);
        assert.equal(5, score.score.fourOfAKind);
        [2,3,4,5,6, "smallStraight", "largeStraight", "fullHouse"].forEach(key => {
            assert.equal(0, score.score[key]);
        });
    });

    it("Full house is also a valid three-of-a-kind", () => {
        var score = new ScoreOfThrow([5,5,5,3,3]);
            
        assert.equal(25, score.score.fullHouse);
        assert.equal(21, score.score.threeOfAKind);
        assert.equal(6, score.score[3]);
        assert.equal(15, score.score[5]);
        assert.equal(21, score.score.chance);
        [1,2,4,6, "smallStraight", "largeStraight", "yahtzee", "fourOfAKind"].forEach(key => {
            assert.equal(0, score.score[key]);
        });
    });
    
    it("1 2 3 4 5 is a large straight", () => {
        var score = new ScoreOfThrow([5,3,2,4,1]);
            
        assert.isTrue(score.containsLargeStraight());
    });

    it("2 3 4 5 6 is a large straight", () => {
        var score = new ScoreOfThrow([5,3,2,4,6]);
            
        assert.isTrue(score.containsLargeStraight());
    });

    it("1 2 3 4 is a small straight", () => {
        var score = new ScoreOfThrow([1,3,2,4,3]);
            
        assert.isTrue(score.containsSmallStraight());
    });

    it("2 3 4 5 is a small straight", () => {
        var score = new ScoreOfThrow([5,3,2,4,3]);
            
        assert.isTrue(score.containsSmallStraight());
    });

    it("3 4 5 6 is a small straight", () => {
        var score = new ScoreOfThrow([1,3,5,4,6]);
            
        assert.isTrue(score.containsSmallStraight());
    });

    it("Three 3s and two other dice lead to 9 points for category 3", () => {
        var score = new ScoreOfThrow([1,3,3,3,6]);

        assert.equal(9, score.score[3]);
    });

    it("Full house leads to 25 points", () => {
        var score = new ScoreOfThrow([6,3,3,3,6]);

        assert.equal(25, score.score.fullHouse);
    });
    
    it("Small straight leads to 30 points", () => {
        var score = new ScoreOfThrow([6,3,2,1,4]);

        assert.equal(30, score.score.smallStraight);
    });

    it("Large straight leads to 40 points", () => {
        var score = new ScoreOfThrow([6,3,5,4,2]);

        assert.equal(40, score.score.largeStraight);
    });
})