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
