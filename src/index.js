import readlineSync from 'readline-sync';

const getName = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};

const greetings = () => console.log('Welcome to the Brain Games!');

export { getName, greetings };
