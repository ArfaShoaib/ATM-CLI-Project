#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBal = 10000;
let myPincode = 2323;
let PinAnswer = await inquirer.prompt([
    {
        name: "Pinans",
        type: "number",
        message: "Enter Your PinCode",
    },
]);
if (PinAnswer.Pinans === myPincode) {
    console.log(chalk.blue("\n \t Your Pincode Is Correct\n"));
    let methods = await inquirer.prompt([
        {
            name: "Methods",
            type: "list",
            message: "Select one Method",
            choices: ["Withdraw Amount", "Check balance"],
        },
    ]);
    if (methods.Methods === "Withdraw Amount") {
        let withDraws = await inquirer.prompt([
            {
                name: "withdrawsMethods",
                type: "list",
                message: "Select one Method",
                choices: ["Fast Cash", "Enter the Amount"],
            },
        ]);
        if (withDraws.withdrawsMethods === "Fast Cash") {
            let FastcashAns = await inquirer.prompt([
                {
                    name: "fastcashMethods",
                    type: "list",
                    message: "Select one Method",
                    choices: ["1000", "2000", "5000", "10000", "15000", "20000"],
                },
            ]);
            if (FastcashAns.fastcashMethods > myBal) {
                console.log("Insufficient Balance");
            }
            else {
                myBal -= FastcashAns.fastcashMethods;
                console.log(`${FastcashAns.fastcashMethods} withdraws succesfully`);
                console.log(`Your balance is ${myBal}`);
            }
        }
        else if (withDraws.withdrawsMethods === "Enter the Amount") {
            let Amount = await inquirer.prompt([
                {
                    name: "amountans",
                    type: "number",
                    message: "Enter Your Amount ",
                },
            ]);
            if (Amount.amountans > myBal) {
                console.log(chalk.green(" \n \t Insufficient Balance \n "));
            }
            else {
                myBal -= Amount.amountans;
                console.log(`${Amount.amountans} withdraws succesfully`);
                console.log(`Your balance is ${myBal}`);
            }
        }
    }
    else if (methods.Methods === "Check balance") {
        console.log(`Your Balance Is: ${myBal}`);
    }
}
else {
    console.log("Wrong Pincode");
}
