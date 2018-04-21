import { randomInt, normalizeNum } from '../math';
import runGame from '../index';

const rule = 'Balance the given number.';

const brainbalance = () => {
  const question = randomInt(1000, 9999);
  const result = normalizeNum(question);
  return {
    question,
    result,
  };
};

const brainbalanceStart = () => runGame(brainbalance, rule);

export default brainbalanceStart;
