var wordConstruct = require("./Word");
var inquirer = require("inquirer");

//Global variable
var remainingGuess = 5;

//Randomly Select word
var wordList = ["test","word","foobar","hello"];
var ranNum = Math.floor(Math.random() * wordList.length);
var wordKey = wordList[ranNum];
var word = new wordConstruct.buildWord(wordKey);
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
            if (word.returnWord().toString() == wordKey){
                console.log("You Guess Correctly!");
                console.log(`The word was: ${wordKey}`);
                remainingGuess = 0;
            }
            else if(wordKey.indexOf(answers.guessChar) != -1){
                console.log(`Remaining guess: ${remainingGuess}`);
                wordGuess();
            }
            else{
                console.log(`Remaining guess: ${remainingGuess}`);
                remainingGuess--;
                wordGuess();
            }
        });
    }
    else{
        console.log(`Remaining guess: ${remainingGuess}`);
        console.log(`The word was: ${wordKey}`);
    }
}

wordGuess();