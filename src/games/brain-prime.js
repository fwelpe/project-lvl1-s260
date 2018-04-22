import { randomInt, isPrime, genPrm } from '../math';
import runGame from '../index';

const rule = "Is this number prime? Answer 'yes' or 'no'.";

const brainprime = () => {
  let question = randomInt(-100, 300);
  if (randomInt(0, 1) === 1) {
    question = genPrm();
  }
  const result = isPrime(question);
  return {
    question,
    result,
  };
};

const brainprimeStart = () => runGame(brainprime, rule);

export default brainprimeStart;
