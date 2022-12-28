import inquirer from "inquirer";
// async functions to get input form cli 
async function first() {
    const guess = await inquirer.prompt([
        {
            type: "list",
            name: "guessNum",
            choices: ["1", "2", "3", "4", "5"],
            message: "Enter a number between 1 to 5: "
        }
    ]);
    // creating a random number
    const random = Math.floor(Math.random() * 4 + 1);
    // re-structure the guess input 
    const { guessNum } = guess;
    console.log(guessNum);
    // condition if user input is same as random number then user win other than loss teh game
    // condition user input must be under 1-4
    if (guessNum > 0 && guessNum <= 5) {
        if (guessNum == random) {
            console.log("You win!");
        }
        else {
            console.log("You Loss the game try again");
            console.log(`The answer is ${random}`);
        }
    }
    else {
        console.log("Plese Enter a valid number");
    }
}
// function that ask user .. want to play again or not.
async function startAgain() {
    do {
        await first();
        var start = await inquirer.prompt({
            type: "list",
            name: "restart",
            choices: ["Yes", "No"],
            message: "Do you want to play again "
        });
        // loop terminate only when user want to quit.
    } while (start.restart == "Yes");
}
startAgain();
