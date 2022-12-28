// const user = {
//   name: "Alex",
//   birthDate: 1993,
//   getAge: function () {
//     return 2022 - this.birthDate;
//   },
// };

// console.log(user.getAge());

//! =======

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// console.log(sum(5, 9, 7));

//! =======

// function sum(a, b, display) {
//   console.log(display);
//   const result = a + b;
//   display(`${a} + ${b} = ${result}`);
//   return result;
// }

// function logger(arg) {
//   console.log(arg);
// }

// const result = sum(5, 3, logger);
// console.log(result);

//! =======

//* Example 1 - Коллбек функції
// Напишіть наступні функції:

//? createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.

//? logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль

//? logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// const productsList = [
//   {
//     name: "Banana",
//     amount: 5,
//     price: 14,
//   },
//   {
//     name: "Apple",
//     amount: 49,
//     price: 10,
//   },
//   {
//     name: "Cherry",
//     amount: 4,
//     price: 18,
//   },
// ];

// // 1. приймаємо обʼєкт та колбек функцію
// // 2. створення нового обʼєкту і додавання властивості айді
// // 3. виклик колбек функції та передача обʼєкту як аргументу

// function createProduct(obj, callback) {
//   //   let callback = function logProduct(product) {
//   //     console.log(product);
//   //   };
//   const newObj = { ...obj, id: Date.now() };
//   callback(newObj);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.amount);
// }

// createProduct(productsList[0], logProduct);
// createProduct(productsList[0], logTotalPrice);

//! =======

//* Example 2 - Коллбек функції

// Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Alex",
//   balance: 2000,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > this.balance) {
//       onError("На жаль, на вашому балансі недостатньо коштів!");
//     } else if (amount > TRANSACTION_LIMIT) {
//       onError("На жаль, ви перевищили ліміт!");
//     } else {
//       this.balance -= amount;
//       onSuccess(`Гроші знято! Поточний баланс: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError("На жаль, ви перевищилі ліміт!");
//     } else if (amount <= 0) {
//       onError("Сума транзакції повинна бути більша нуля!");
//     } else {
//       this.balance += amount;
//       onSuccess(`Гроші покладено на баланс! Поточний баланс: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`Успішна операція! ${message}`);
// }

// function handleError(message) {
//   console.log(`Помилка! ${message}`);
// }

// account.withdraw(300, handleSuccess, handleError);
// account.withdraw(1100, handleSuccess, handleError);
// account.withdraw(5000, handleSuccess, handleError);

// account.deposit(5000, handleSuccess, handleError);
// account.deposit(100, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-400, handleSuccess, handleError);

//! =======

//* Example 3 - Коллбек функції
// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

function each(array, callback) {
  // 1. створити новий пустий масив
  // 2. перебрати массив array за допомогою циклу
  // 3. виклик колбек функцїї callback на кожному елементі масиву
  // 4. додати модифікований елемент в новий масив
  // 5. повернути новий масив

  const modifiedArr = [];

  //   array.forEach((el) => modifiedArr.push(callback(el)));
  for (const el of array) {
    modifiedArr.push(callback(el));
  }

  return modifiedArr;
}

const arr = [1, 2, 3, 4, 5];

console.log(each(arr, pow));
console.log(each(arr, addOne));

function pow(num) {
  return num ** 2;
}
function addOne(num) {
  return num + 1;
}
