const randomInt = (min, max) => {
  let rand = min + (Math.random() * ((max + 1) - min));
  rand = Math.floor(rand);
  return rand;
};

const getMutualDivider = (num1, num2, divider) => {
  if (num1 % divider === 0 && num2 % divider === 0) {
    return divider;
  }
  if (num1 <= divider || num2 <= divider) {
    return false;
  }
  return getMutualDivider(num1, num2, divider + 1);
};

const gcd = (num1, num2, res) => {
  const divider = getMutualDivider(num1, num2, 2);
  if (divider !== false) {
    return gcd(num1 / divider, num2 / divider, res * divider);
  }
  return res;
};

export { gcd, randomInt, getMutualDivider };
