#!/usr/bin/env ts-node
import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import { Game } from './game.js';
import { QUESTIONS } from './assets/questions.js';
import { CliHelper } from './helper.js';
let student: string = "Mr. Noname";
const Questions = QUESTIONS;

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        'Who Wants To Be A JavaScript Millionaire? \n'
    );

    await CliHelper.sleep();
    rainbowTitle.stop();

    console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...
  `);
}

async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'Player';
        },
    });

    student = answers.player_name;
}

// Run it with top-level await
console.clear();
await welcome();
await askName();

const game = new Game(student, Questions)
await game.play();