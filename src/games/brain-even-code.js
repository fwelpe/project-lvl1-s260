import readlineSync from 'readline-sync';
import randomInt from '../math';

const brainevenRules = () => console.log('Answer "yes" if number even otherwise answer "no".');

const braineven = (playerName) => {
  const iter = (attempt) => {
    if (attempt === 4) {
      console.log(`Congratulations, ${playerName}!`);
      return true;
    }
    const randomNumber = randomInt(0, 1000);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    let answerBool;
    if (answer === 'yes') {
      answerBool = true;
    } else if (answer === 'no') {
      answerBool = false;
    }
    const isEven = randomNumber % 2 === 0;
    if (isEven === answerBool) {
      console.log('Correct!');
      return iter(attempt + 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}'.`);
    console.log(`Let's try again, ${playerName}!`);
    return true;
  };
  return iter(1);
};

export { brainevenRules, braineven };
