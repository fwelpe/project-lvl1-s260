import { randomInt, gcd } from '../math';

const braingcd = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  let num1 = randomInt(1, 99);
  let num2 = randomInt(1, 99);
  const preresult = gcd(num1, num2, 1);
  const num3 = randomInt(3, 22);
  num1 *= num3;
  num2 *= num3;
  const question = `${num1} ${num2}`;
  const result = `${preresult * num3}`;
  return {
    question,
    result,
    rule,
  };
};

export default braingcd;
