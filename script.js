function getStone(stoneName) {
  const stones = {
    Смарагд: {
      price: 1300,
      quantity: 4,
    },
    Діамант: {
      price: 2700,
      quantity: 3,
    },
    Сапфір: {
      price: 400,
      quantity: 7,
    },
    Щебінь: {
      price: 200,
      quantity: 2,
    },
  };

  //   return Promise.resolve(stones[stoneName]);
  return new Promise((resolve) =>
    setTimeout(() => resolve(stones[stoneName]), 500)
  );
}

/*
    1. await можна використовувати тільки всередині асинхроних функцій
    2. інструкція await заморожує виконання асинхроної ф-ції до тих пір, поки проміс не перейде в стан Rejected або fullfilled (тобто, ми імітуємо синхронність у виконанні асинхронного коду)
    3. await поверне не проміс, а його результат
    4. асинхронна функція завжди повертає проміс
*/

async function getStonesSequentiallyAsync() {
  console.time("getStones");
  console.log("start");
  //   const emerald = await getStone("Смарагд");
  //   console.log(emerald);
  //   const sapphire = await getStone("Сапфір");
  //   console.log(sapphire);
  const emerald = getStone("Смарагд");
  const sapphire = getStone("Сапфір");

  const stones = await Promise.all([emerald, sapphire]);
  console.log("🚀 ~ stones", stones);

  console.log("end");
  console.timeEnd("getStones");
  return stones;
}

function getStonesSequentially() {
  getStone("Смарагд").then((stone) => {
    console.log(stone);

    getStone("Сапфір").then(console.log);
  });
}
// console.time("getStones");
// console.timeEnd("getStones");
// getStonesSequentially();

console.log("Before");
getStonesSequentiallyAsync();
console.log("After");

/*
Макрозадачі і Мікрозадачі
ScriptQueue:
PromiseJobs:
*/

// console.log("1"); //синхрона операція 1

// setTimeout(() => console.log("2"), 0); //асинхрона операція, макрозадача, 5

// const promise = new Promise((res) => {
//   console.log("3"); //синхрона операція 2
//   res("4");
// });

// promise.then((data) => console.log(data)); //асинхрона операція, мікрозадача, 4

// console.log("5"); //синхрона операція 3
