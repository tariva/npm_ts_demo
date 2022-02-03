import chalk from "chalk";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import { Question } from "./assets/questions.js";
import { CliHelper } from "./helper.js";
export class Game {
    private Questions: Question[] = [];
    private PlayerName: string;
    constructor(playername: string, questions: Question[]) {
        this.Questions = questions;
        this.PlayerName = playername;
    }
    public async play() {
        for (const question of this.Questions) {
            await this.askQuestion(question);
        }

        this.endGame();
    }
    private async askQuestion(question: Question) {
        const answers = await inquirer.prompt(question as any);
        return this.handleAnswer(answers[question.name] === question.solution);
    }
    private async handleAnswer(isCorrect: boolean) {
        const spinner = createSpinner('Checking answer...').start();
        await CliHelper.sleep();

        if (isCorrect) {
            spinner.success({ text: `Nice work ${this.PlayerName}. That's a legit answer` });
        } else {
            spinner.error({ text: `💀💀💀 Game over, you lose ${this.PlayerName}!` });
            process.exit(0);
        }
    }
    private async endGame() {
        //console.clear();
        await CliHelper.figletPromise(`Congrats , ${this.PlayerName} !\n $ 1 , 0 0 0 , 0 0 0`).then((data) => {
            console.log(gradient.pastel.multiline(data as any) + '\n');
            console.log(
                chalk.green(
                    `Programming isn't about what you know; it's about making the command line look cool`
                )
            );
        })
        process.exit(0);
    }
}