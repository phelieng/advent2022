const fs = require('fs');

// paper B Y
// scissor C Z
// rock A X

scoreTable = {
    A : {
        X : 1 + 3,
        Y : 2 + 6,
        Z : 3 + 0
    },
    B : {
        X : 1 + 0,
        Y : 2 + 3,
        Z : 3 + 6
    },
    C : {
        X : 1 + 6,
        Y : 2 + 0,
        Z : 3 + 3
    }
};

fs.readFile('./advent2-data', 'utf8', (err, data) => {
    score = 0
    data.split("\n").forEach(elem => {
        score += scoreTable[elem[0]][elem[2]]
    })
    console.log(score)
});

// X lose
// Y draw
// Z win
// (1 for Rock, 2 for Paper, and 3 for Scissors)

scoreTablePart2 = {
    X : { // lose
        A : 0 + 3,
        B : 0 + 1,
        C : 0 + 2
    },
    Y : { // draw
        A : 3 + 1,
        B : 3 + 2,
        C : 3 + 3
    },
    Z : { // win
        A : 6 + 2,
        B : 6 + 3,
        C : 6 + 1
    }
}

fs.readFile('./advent2-data', 'utf8', (err, data) => {
    score = 0
    data.split("\n").forEach(elem => {
        score += scoreTablePart2[elem[2]][elem[0]]

    })
    console.log(score)
});

