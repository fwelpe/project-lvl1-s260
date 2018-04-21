import { randomInt } from '../math';
import runGame from '../index';

const braincalc = () => {
  const rule = 'What is the result of the expression?';
  const opr = randomInt(0, 2);
  const num1 = randomInt(1, 99);
  const num2 = randomInt(1, 99);
  const num3 = randomInt(1, 9);
  let question;
  let result;
  if (opr === 0) {
    question = `${num1} + ${num2}`;
    result = `${num1 + num2}`;
  } else if (opr === 1) {
    question = `${num1} - ${num2}`;
    result = `${num1 - num2}`;
  } else if (opr === 2) {
    question = `${num1} * ${num3}`;
    result = `${num1 * num3}`;
  }
  return {
    question,
    result,
    rule,
  };
};

const braincalcStart = () => runGame(braincalc);

export default braincalcStart;
