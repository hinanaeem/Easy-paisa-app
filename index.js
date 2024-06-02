#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.italic.underline.overline.greenBright("<<<<<<< Welcome to Easy Paisa App >>>>>>>"));
let balance = 30000;
let pin = 45654;
do {
    const answer = await inquirer.prompt({
        message: "Please Enter Your 5 Digit PinCode.",
        name: "PinCode",
        type: "password"
    });
    if (answer.PinCode > 10000 && answer.PinCode < 99999) {
        console.log(chalk.bold.italic.yellowBright("Your PinCode is Correct"));
        let operatorAns = await inquirer.prompt({
            message: "Please Select an Operator.",
            name: "Operators",
            type: "list",
            choices: [
                chalk.bold.italic.red("Transfer Money"),
                chalk.bold.italic.magenta("Receive Money"),
                chalk.bold.italic.blue("Bill Payment"),
                chalk.bold.italic.yellow("Easy Load Bundles"),
                chalk.bold.italic.green("Saving"),
                chalk.bold.italic.grey("Exit")
            ]
        });
        if (operatorAns.Operators == chalk.bold.italic.red("Transfer Money")) {
            let transferAns = await inquirer.prompt({ message: "Please Enter your Amount.",
                name: "Amount",
                type: "number"
            });
            let remainingBalance = balance - transferAns.Amount;
            if (transferAns.Amount > balance) {
                console.log("You have Insufficient Balance.");
            }
            else {
                console.log(`Your Remaining Balance is ${remainingBalance}`);
            }
        }
        if (operatorAns.Operators == chalk.bold.italic.magenta("Receive Money")) {
            let receiveAns = await inquirer.prompt({
                message: "Please Enter Your Amount.",
                name: "ReceiveMoney",
                type: "number"
            });
            let newBalance = balance + receiveAns.ReceiveMoney;
            console.log(`Your Current Balance is ${newBalance}`);
        }
        if (operatorAns.Operators == chalk.bold.italic.blue("Bill Payment")) {
            let billPaymentAns = await inquirer.prompt({
                message: "Please Enter Your Amount To Paying The Bill.",
                name: "Billpayment",
                type: "number"
            });
            let afterPayment = balance - billPaymentAns.Billpayment;
            if (billPaymentAns.Billpayment > balance) {
                console.log("You have an Insufficient Balance.");
            }
            else {
                console.log(`Your Bill Payed Successfully and Your Remaining Balance is ${afterPayment}.`);
            }
        }
        if (operatorAns.Operators == chalk.bold.italic.yellow("Easy Load Bundles")) {
            console.log(chalk.bold.italic.underline.overline.cyanBright("<<<<<<< Welcome to Easy Load Bundles >>>>>>>"));
            let EasyloadAns = await inquirer.prompt({
                message: "Please Select Your Bundle",
                name: "Bundles",
                type: "list",
                choices: ["Jazz Bundle", "Telenor Bundle", "Zong Bundle"]
            });
            if (EasyloadAns.Bundles == "Jazz Bundle") {
                console.log(chalk.bold.italic.underline.overline.greenBright("<<<<<<< Welcome to Jazz Bundles >>>>>>>"));
                let jazzAns = await inquirer.prompt({
                    message: "Please Select Your Bundle.",
                    name: "Select",
                    type: "list",
                    choices: ["Daily Bundle", "Weekly Bundle", "Monthly Bundle"]
                });
            }
            else if (EasyloadAns.Bundles == "Telenor Bundle") {
                console.log(chalk.bold.italic.underline.overline.greenBright("<<<<<<< Welcome to Telenor Bundles >>>>>>>"));
                let telenorAns = await inquirer.prompt({
                    message: "Please Select Your Bundle.",
                    name: "Select",
                    type: "list",
                    choices: ["Daily Bundle", "Weekly Bundle", "Monthly Bundle"]
                });
            }
            else if (EasyloadAns.Bundles == "Zong Bundle") {
                console.log(chalk.bold.italic.underline.overline.greenBright("<<<<<<< Welcome to Zong Bundles >>>>>>>"));
                let zongAns = await inquirer.prompt({
                    message: "Please Select Your Bundle.",
                    name: "Select",
                    type: "list",
                    choices: ["Daily Bundle", "Weekly Bundle", "Monthly Bundle"]
                });
            }
        }
        if (operatorAns.Operators == chalk.bold.italic.green("Saving")) {
            let savingAns = await inquirer.prompt({
                message: "Please Enter Your Amount.",
                name: "Saving",
                type: "number"
            });
            let newSavingAns = balance + savingAns.Saving;
            console.log(`Your New Balance is ${newSavingAns}`);
        }
        if (operatorAns.Operators == chalk.bold.italic.grey("Exit")) {
            console.log("Thank You For Using This App.");
        }
    }
    else {
        console.log("Your Pin Code Is Incorrect.");
    }
} while (true);
