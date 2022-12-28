import inquire from "inquirer";
// todo list
var todo = [];
async function taketodo(array) {
    // let todo:string[] =  [];
    const answer = await inquire.prompt([
        {
            type: "input",
            name: "element",
            message: "What you want to enter your in your list"
        }
    ]);
    const { element } = answer;
    if (element === "") {
        console.log("Enter a valid input");
    }
    else {
        todo.push(element);
    }
    // console.log(todo)
}
async function repeate() {
    do {
        await taketodo(todo);
        var ans = await inquire.prompt([
            {
                type: "confirm",
                name: "select",
                message: "do you want to enter more items in your list",
                default: false
            }
        ]);
        // let {select} = ans;
    } while (ans.select == true);
    console.log(`Your final todo list is`);
    let i = 1;
    todo.forEach((ele) => {
        console.log(i++ + " : " + ele);
    });
}
repeate();
