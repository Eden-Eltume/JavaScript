let rlSync = require('readline-sync');

let answer;
do {
  answer = rlSync.question("Do you want to do that again? ");
} while (answer === 'y');