#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
const figlet = require('figlet');

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email :mailbox:")}`,
                value: () => {
                    open("mailto:jrzvnn@gmail.com");
                    console.log("\nDone! See you soon in your inbox. 🚀\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Hasta la vista.\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green(
        `
░░░░░██╗░█████╗░██████╗░██╗███████╗  ██╗██╗░░░██╗░█████╗░███╗░░██╗███╗░░██╗
░░░░░██║██╔══██╗██╔══██╗██║╚════██║  ██║██║░░░██║██╔══██╗████╗░██║████╗░██║
░░░░░██║██║░░██║██████╔╝██║░░███╔═╝  ██║╚██╗░██╔╝███████║██╔██╗██║██╔██╗██║
██╗░░██║██║░░██║██╔══██╗██║██╔══╝░░  ██║░╚████╔╝░██╔══██║██║╚████║██║╚████║
╚█████╔╝╚█████╔╝██║░░██║██║███████╗  ██║░░╚██╔╝░░██║░░██║██║░╚███║██║░╚███║
░╚════╝░░╚════╝░╚═╝░░╚═╝╚═╝╚══════╝  ╚═╝░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚══╝
`
    ),
    handle: chalk.white("@jrzvnn"),
    work: `${chalk.white("CTO @ GDSC PUP | DOST Scholar | AI/ML Enthusiast")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("jrz_studies"),
    github: chalk.gray("https://github.com/") + chalk.green("jrzvnn"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("jrz-vnn"),
    npx: chalk.red("npx") + " " + chalk.white("jrzvnn"),

    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter :bird::"),
    labelGitHub: chalk.white.bold("     GitHub ✨:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn :bookmark_tabs:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic("I am currently looking for new opportunities.")}`,
        `${chalk.italic("My inbox is always open. Whether you have a")}`,
        `${chalk.italic("question or just want to say hi, I will do my best")}`,
        `${chalk.italic("to get back to you!")}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());
