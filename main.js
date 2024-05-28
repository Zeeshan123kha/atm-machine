#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let myAccountBalance = 30000; //dollar 
let myPinCode = 1245;
let pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pinAnswer",
        message: "Enter your pin...",
        type: "number",
    },
]);
if (pinAnswer.pinAnswer === myPinCode) {
    console.log("Correct Pin Code....");
}
else {
    console.log("Incorrect Pin Code...");
}
let operationAns = await inquirer_1.default.prompt([
    {
        name: "operationAns",
        message: "Enter your operation...",
        type: "list",
        choices: ["Withdraw", "checkBalance",],
    },
]);
if (operationAns.operationAns === "checkBalance") {
    console.log("Your current balance is " + myAccountBalance);
}
else if (operationAns.operationAns === "Withdraw") {
    let withdrawMethod = await inquirer_1.default.prompt([
        {
            name: "withdrawMethod",
            message: "Enter the amount you wish to withdraw...",
            type: "list",
            choices: ["enterAmount", "fastCash"],
        },
    ]);
    if (withdrawMethod.withdrawMethod === "fastCash") {
        let fastCashAmount = await inquirer_1.default.prompt([
            {
                name: "fastCashAmount",
                message: "Enter Your Amount you wish...",
                type: "list",
                choices: ["1000", "3000", "5000"],
            },
        ]);
        let amountAns = fastCashAmount.fastCashAmount;
        if (amountAns > myAccountBalance) {
            console.log("You entered amount greater than your balance");
        }
        else if (amountAns <= myAccountBalance) {
            let ramainingBalance = myAccountBalance -
                amountAns;
            console.log(`Your remaining balance is ${ramainingBalance}`);
        }
    }
}
let amountAns = await inquirer_1.default.prompt([
    {
        name: "amountAns",
        message: "Enter Your Amount you wish...",
        type: "number",
    },
]);
if (amountAns.amountAns > myAccountBalance) {
    console.log("You entered amount greater than your balance");
}
else if (amountAns.amountAns < myAccountBalance) {
    let ramainingBalance = myAccountBalance - amountAns.amountAns;
    console.log(`Your remaining balance is ${ramainingBalance}`);
}
