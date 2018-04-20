import readlineSync from 'readline-sync';
import randomInt from '../math';

const braincalcRules = () => console.log('What is the result of the expression?');

const braincalc = (playerName) => {
  const iter = (attempt) => {
    if (attempt === 4) {
      console.log(`Congratulations, ${playerName}!`);
      return true;
    }
    const opr = randomInt(0, 2);
    const num1 = randomInt(0, 99);
    const num2 = randomInt(0, 99);
    let question;
    let result;
    if (opr === 0) {
      question = `Question: ${num1} + ${num2}`;
      result = `${num1 + num2}`;
    } else if (opr === 1) {
      question = `Question: ${num1} - ${num2}`;
      result = `${num1 - num2}`;
    } else if (opr === 2) {
      question = `Question: ${num1} * ${num2}`;
      result = `${num1 * num2}`;
    }
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === result) {
      console.log('Correct!');
      return iter(attempt + 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
    console.log(`Let's try again, ${playerName}!`);
    return true;
  };
  return iter(1);
};

export { braincalc, braincalcRules };
