var character = require("./Letter");

class buildWord{
    constructor(word){
        var letterArray = []
        var wordArray = word.split("")
        for (var i=0; i<wordArray.length; i++){
            wordArray[i] = new character.letter(wordArray[i]);
            letterArray.push(wordArray[i]);
        }
        this.word = letterArray;
    }
    returnWord(){
        var wordString = ""
        for (var i=0; i<this.word.length; i++){
            wordString += (this.word[i].returnChar()).toString();
        }
        return wordString;
    }
    guessChar(character){
        for (var i=0; i< this.word.length; i++){
            this.word[i].isCorrect(character);
        }
    }
}

module.exports = {
    buildWord: buildWord
}
