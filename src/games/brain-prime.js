import { randomInt, isPrime, genPrm } from '../math';
import runGame from '../index';

const rule = "Is this number prime? Answer 'yes' or 'no'.";

const brainprime = () => {
  let question;
  let result;
  const randomChoose = randomInt(0, 1);
  if (randomChoose) {
    question = randomInt(-50, 1000);
    result = isPrime(question) ? 'yes' : 'no';
  } else {
    question = genPrm();
    result = 'yes';
  }
  return {
    question,
    result,
  };
};

const brainprimeStart = () => runGame(brainprime, rule);

export default brainprimeStart;
