import { randomInt } from '../math';
import runGame from '../index';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const braineven = () => {
  const question = randomInt(1, 100);
  const result = question % 2 === 0 ? 'yes' : 'no';
  return {
    question,
    result,
  };
};

const brainevenStart = () => runGame(braineven, rule);

export default brainevenStart;
