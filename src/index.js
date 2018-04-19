import readlineSync from 'readline-sync';

const getName = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};

const greetings = () => console.log('Welcome to the Brain Games!');

const brainevenRules = () => console.log('Answer "yes" if number even otherwise answer "no".');

const firstGame = (playerName) => {
  const iter = (attempt) => {
    if (attempt === 4) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const randomNumberFunction = () => Math.round((Math.random() * 1000));
    const randomNumber = randomNumberFunction();
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
  };
  return iter(1);
};

export { getName, greetings, brainevenRules, firstGame };
