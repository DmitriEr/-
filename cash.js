const atm = (money, limit) => {
  let value = money;
  const result = {};
  const entries = Object.keys(limit).sort((a, b) => Number(b) - Number(a));

  if (money % entries[entries.length -1] !== 0) {
    return 'Error: Incorrect value';
  }

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
    entries.forEach((nominal) => {
      if (result[nominal]) {
        limit[nominal] += result[nominal];
      }
    })
    return 'Error: Not enough money';
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