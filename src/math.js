const randomInt = (min, max) => {
  let rand = min + (Math.random() * ((max + 1) - min));
  rand = Math.floor(rand);
  return rand;
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

const isPrime = (num) => {
  if (num <= 0 || !Number.isInteger(num)) {
    return 'no';
  }
  const iter = (checknum) => {
    if (checknum >= num) {
      return 'yes';
    }
    if (num % checknum === 0) {
      return 'no';
    }
    return iter(checknum + 1);
  };
  return iter(2);
};

const genPrm = () => {
  const randomNum = randomInt(2, 1000);
  if (isPrime(randomNum) === 'yes') {
    return randomNum;
  }
  return genPrm();
};

export { randomInt, gcdEuclid, normalizeNum, progressionArr, isPrime, genPrm };
