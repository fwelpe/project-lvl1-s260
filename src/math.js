const randomInt = (min, max) => {
  let rand = min + (Math.random() * ((max + 1) - min));
  rand = Math.floor(rand);
  return rand;
};

const getMutualDivider = (num1, num2) => {
  const iter = (num1iter, num2iter, divider) => {
    if (num1iter % divider === 0 && num2iter % divider === 0) {
      return divider;
    }
    if (num1iter < divider || num2iter < divider) {
      return false;
    }
    return iter(num1iter, num2iter, divider + 1);
  };
  return iter(num1, num2, 2);
};

const gcd = (num1, num2) => {
  const iter = (num1iter, num2iter, res) => {
    const divider = getMutualDivider(num1iter, num2iter);
    if (divider !== false) {
      return iter(num1iter / divider, num2iter / divider, res * divider);
    }
    return res;
  };
  return iter(num1, num2, 1);
};

const gcdEuclid = (num1, num2) => {
  const greater = num1 > num2 ? num1 : num2;
  const smaller = num1 < num2 ? num1 : num2;
  const iter = (divident, divider) => {
    const result = divident % divider;
    if (result === 0) {
      return divider;
    }
    return iter(divider, result);
  };
  return iter(greater, smaller);
};

export { gcd, randomInt, gcdEuclid };
