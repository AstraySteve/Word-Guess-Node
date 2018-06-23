class letter{
    constructor(character){
        this.character = character;
        this.guessed = false;
    }
    returnChar(){
        if (this.guessed){
            return this.character;
        }
        else{
            return ("_ ");
        }
    }
    isCorrect(guessedLetter){
        if (guessedLetter == this.character){
            this.guessed = true;
        }
    }
}

module.exports = {
    letter: letter
}

//DEBUG
/*
var test = new letter("x");
console.log(test.character);
console.log(test.guessed);
var testValue = test.returnChar();
console.log(testValue);
test.isCorrect("x");
console.log(test.guessed);
testValue = test.returnChar();
console.log(testValue);
*/