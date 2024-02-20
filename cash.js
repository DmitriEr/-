const atm = (money, limit) => {
  let value = money;
  const result = {};
  const entries = Object.keys(limit).sort((a, b) => Number(b) - Number(a));

  entries.forEach((nominal) => {
    const nominalNumber = Number(nominal);
    const resultCount = Math.floor(value / nominalNumber);
    const resultCountIncludeLimit = resultCount > limit[nominal] ? limit[nominal] : resultCount;

    if (resultCountIncludeLimit >= 1 && limit[nominal]) {
      result[nominal] = resultCountIncludeLimit;
      limit[nominal] = limit[nominal] - resultCountIncludeLimit;
      value -= resultCountIncludeLimit * nominalNumber;
    }
  });

  if (value) {
    const isEmpty = Object.values(limit).every((item) => item === 0);
    throw new Error(isEmpty ? 'Not enough money' : 'Not exchange')
  }

  return result;
}

const cashiWthdrawal = () => {
  const limits = {
    5000: 0,
    1000: 6,
    500: 5,
    100: 5,
    50: 4,
  };


  console.log(atm(1250, limits)); // { 1000: 1, 100: 2, 50: 1 }
  console.log(atm(1_000_000, limits)); // 'Error: Not enough money'
  console.log(atm(2400, limits)); // { 1000: 2, 100: 3, 50: 2 }
  console.log(atm(6_512, limits)); // 'Error: Incorrect value'
  console.log(atm(50, limits)); // { 50: 1 }
  console.log(atm(50, limits)); // 'Error: Not enough money'
  console.log(atm(5500, limits)); // { 1000: 3, 500: 5 }
};

cashiWthdrawal()