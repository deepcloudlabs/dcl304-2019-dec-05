import Move from "./move.js";

export default class GameViewModel {
    constructor() {
        this.tries = 0;
        this.level = 3;
        this.secret = this.createSecret();
        this.moves = [];
    }

    play(guess) {
        guess = guess.toString();
        if (guess == this.secret) {
            this.level++;
            this.initGame();
            this.moves.push(new Move(guess, "You win!"));
        } else {
            this.tries++;
            let message = this.evalGuess(guess);
            this.moves.push(new Move(guess, message));
        }
    }

    createSecret() {
        let digits = [];
        digits.push(this.createRandomDigit(1, 9));
        while (digits.length < this.level) {
            let num = this.createRandomDigit();
            if (!digits.includes(num))
                digits.push(num);
        }
        return digits.reduce((acc, num) => acc + num, "");
    }

    createRandomDigit(min = 0, max = 9) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    initGame() {
        this.tries = 0;
        this.moves = [];
        this.secret = this.createSecret();
    }

    evalGuess(guess) {
        let perfectMatch = 0, partialMatch = 0;
        for (let i = 0; i < this.secret.length; ++i) {
            let s = this.secret.charAt(i);
            for (let j = 0; j < guess.length; ++j) {
                let g = guess.charAt(j);
                if (s === g) {
                    if (i === j) {
                        perfectMatch++;
                    } else {
                        partialMatch--;
                    }
                }
            }
        }
        let message = "";
        if (perfectMatch > 0) message = "+" + perfectMatch;
        if (partialMatch < 0) message += partialMatch;
        if (message.length < 1) message = "No match";
        return message;
    }
}
