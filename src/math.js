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
    if (!divider) {
      return iter(num1iter / divider, num2iter / divider, res * divider);
    }
    return res;
  };
  return iter(num1, num2, 1);
};

const gcdEuclidOld = (num1, num2) => {
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

const gcdEuclid = (num1, num2) => (num2 ? gcdEuclid(num2, num1 % num2) : num1);

const normalizeNum = (num) => {
  const StrArray = String(num).split('');
  const IntArray = StrArray.map(Number);
  const SortedArray = IntArray.sort();
  const iter = (arr) => {
    if (arr[arr.length - 1] - arr[0] <= 1) {
      return arr;
    }
    let workArr = arr;
    workArr[0] += 1;
    workArr[workArr.length - 1] -= 1;
    workArr = workArr.sort();
    return iter(workArr);
  };
  let result = iter(SortedArray);
  result = result.join('');
  return result;
};

const progressionArr = (startNum, step, intsInArr) => {
  if (step === 0) {
    return false;
  }
  const iter = (arr, stepNum) => {
    if (stepNum > intsInArr) {
      return arr;
    }
    const arrIter = arr;
    const lastInArr = arr[arr.length - 1];
    arrIter.push(lastInArr + step);
    return iter(arrIter, stepNum + 1);
  };
  return iter([startNum], 2);
};

export { gcd, randomInt, gcdEuclid, gcdEuclidOld, normalizeNum, progressionArr };
