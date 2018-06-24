var wordConstruct = require("./Word");
var inquirer = require("inquirer");

//Global variable
var remainingGuess = 5;

//Randomly Select word
var wordList = ["test","word","foobar","hello"];
var ranNum = Math.floor(Math.random() * wordList.length);
var word = new wordConstruct.buildWord(wordList[ranNum]);
//console.log(word);

wordGuess = () => {
    console.log(word.returnWord());
    //Prompt user for each guess
    if(remainingGuess>0){
        inquirer.prompt([
            {
                "name": "guessChar",
                "type": "input",
                "message": "Guess a Letter",
            }
        ]).then(answers => {
            word.guessChar(answers.guessChar);
            if (word.returnWord().toString() == wordList[ranNum]){
                console.log("You Guess Correctly!");
                remainingGuess = 0;
            }
            console.log(remainingGuess);
            remainingGuess--;
            wordGuess();
        });
    }
    else{
        console.log(wordList[ranNum]);
    }
}

wordGuess();