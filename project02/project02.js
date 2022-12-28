import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "UserId",
        message: "Enter Your id here"
    },
    {
        type: "number",
        name: "pin",
        message: "Enter Your Pic here"
    },
    {
        type: "list",
        name: "accType",
        choices: ["current Account", "Saving Account"],
        message: "Chose your account type.",
        when(answer) {
            return answer.UserId && answer.pin;
        }
    },
    {
        type: "list",
        name: "operation",
        choices: ["withdrow", "Transfer", "BalanceQuery"],
        message: "What operation You want to perform",
        when(answer) {
            return answer.accType;
        }
    },
    {
        type: "number",
        message: "Enter The ammount you want to withdrow",
        name: "amountWithdrow",
        when(answer) {
            return answer.operation == "withdrow";
        }
    },
    {
        type: "number",
        name: "amountTransfer",
        message: "Enter The ammount you want to Transfer",
        when(answer) {
            return answer.operation == "Transfer";
        }
    }
]);
const balance = Math.floor(Math.random() * 1000000);
// console.log(balance)
// let ans = answer.operation;
// console.log(ans)
const { operation, amountWithdrow, amountTransfer } = answer;
if (operation) {
    if (operation == "withdrow") {
        if (balance >= amountWithdrow) {
            console.log(`Your previous Balance is: ${balance}`);
            let newBalance = balance - amountWithdrow;
            console.log(`Your current Balance is: ${newBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (operation == "Transfer") {
        if (balance >= amountTransfer) {
            console.log(`Your previous Balance is: ${balance}`);
            let newBalance = balance - amountTransfer;
            console.log(`Your current Balance is: ${newBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (operation == "BalanceQuery") {
        console.log(`Your current Balance is: ${balance}`);
    }
}
// if(operation){
//     if(balance >= amountWithdrow){
//         console.log(`Your previous Balance is: ${balance}`);
//         let newBalance = balance - amountWithdrow;
//         console.log(`Your current Balance is: ${newBalance}`);
//     }else{
//         console.log("Insufficient Balance")
//     }
// }else if(Transfer){
// if(balance >= amountTransfer){
//     console.log(`Your previous Balance is: ${balance}`);
//     let newBalance = balance - amountTransfer;
//     console.log(`Your current Balance is: ${newBalance}`);
// }else{
//     console.log("Insufficient Balance")
// }
// }else if(BalanceQuery){
//     console.log(`Your current Balance is: ${balance}`);
// }
