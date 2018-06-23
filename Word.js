var character = require("./Letter");

class buildWord{
    constructor(letterArray){
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

var T = new character.letter("t");
var E = new character.letter("e");
var S = new character.letter("s");

var testWord = new buildWord([T,E,S,T]);
var test = testWord.returnWord();
console.log(test);
testWord.guessChar("t");
test = testWord.returnWord();
console.log(test);
testWord.guessChar("e");
test = testWord.returnWord();
console.log(test);
testWord.guessChar("s");
test = testWord.returnWord();
console.log(test);