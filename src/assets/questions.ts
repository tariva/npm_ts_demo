
export interface Question {
    name: string;
    type: 'input' | 'number' | 'confirm' | 'list' | 'rawlist' | 'expand' | 'checkbox' | 'password' | 'editor';
    message: string;
    choices: (string | number)[];
    solution: string | number;
};
export const QUESTIONS: Question[] = [
    {
        name: "question_1",
        type: "list",
        message: "JavaScript was created in 10 days then released on\n",
        choices: ["May 23rd,1995", "Nov 24th, 1995", "Dec 4th, 1995", "Dec 17, 1996"],
        solution: "Dec 4th, 1995"
    },
    {
        name: 'question_2',
        type: 'list',
        message: 'What is x? var x = 1_1 + "1" + Number(1)\n',
        choices: ['4', '"4"', '"1111"', '69420'],
        solution: '"1111"'
    }, {
        name: 'question_3',
        type: 'list',
        message: `What is the first element in the array? ['🐏', '🦙', '🐍'].length = 0\n`,
        choices: ['0', '🐏', '🐍', 'undefined'],
        solution: "undefined"
    },
    {
        name: 'question_4',
        type: 'list',
        message: 'Which of the following is NOT a primitive type?\n',
        choices: [
            'boolean',
            'number',
            'null',
            'object', // Correct
        ],
        solution: 'object'
    },
    {
        name: 'question_5',
        type: 'list',
        message:
            'JS is a high-level single-threaded, garbage-collected,\n' +
            'interpreted(or just-in-time compiled), prototype-based,\n' +
            'multi-paradigm, dynamic language with a ____ event loop\n',
        choices: ['multi-threaded', 'non-blocking', 'synchronous', 'promise-based'],
        solution: "non-blocking"
    }
]