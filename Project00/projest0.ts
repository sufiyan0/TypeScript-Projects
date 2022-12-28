import inquirer from "inquirer";

const answer : {
    firstNum:number,
    secondNum:number,
    operator:string
} = await inquirer.prompt([
   
    {
        type:"number",
        name : "firstNum",
        message:"Enter First Number: "
    },
    {
        type:"number",
        name : "secondNum",
        message:"Enter Second Number: "
    },
    {
        type:"list",
        name : "operator",
        choices : ["+", "-", "/", "*"],
        message : "Enter Operator: "
    }


]);

const {firstNum,secondNum,operator} = answer;
if(answer){
    let result;
    if(operator === "+"){
        result = firstNum + secondNum;
    }else if(operator === "-"){
        result = firstNum - secondNum;
    }else if(operator === "/"){
        result = firstNum / secondNum;
    }else if(operator === "*"){
        result = firstNum * secondNum;
    }
    console.log(`The final result is:  ${result}`)
}else{
    console.log("Plese Enter a valid input")
}

