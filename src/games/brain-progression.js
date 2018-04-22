import { randomInt, progressionArr } from '../math';
import runGame from '../index';

const rule = 'What number is missing in this progression?';

const brainprogression = () => {
  let step = 0;
  while (step === 0) {
    step = randomInt(-5, 7);
  }
  const startNum = randomInt(-100, 100);
  const intsInArr = randomInt(5, 7);
  let question = progressionArr(startNum, step, intsInArr);
  const index = Math.floor(intsInArr / 2);
  const result = String(question[index]);
  question[index] = '..';
  question = question.join(' ');
  return {
    question,
    result,
  };
};

const brainprogressionStart = () => runGame(brainprogression, rule);

export default brainprogressionStart;
