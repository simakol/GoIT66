// const arr = [1, 2, 64, 4, 22, 98, 44, 22, 33];

// // console.log(arr.sort((a, b) => a - b)); // за зростанням
// // console.log(arr.sort((a, b) => b - a)); // за спаданням

// // arr.forEach((el, i) => {
// //   console.log(`${i}: ${el}`);
// // });

// const arrSum = arr.reduce((acc, el, i) => {
//   console.log(i, acc, el);
//   return acc + el;
// }, 0);

// // 1. (acc = 0, el = 1) => 0+1 | return 1
// // 2. (acc = 1, el = 2) => 1+2 | return 3
// // 3. (acc = 3, el = 64) => 3+64 | return 67

// console.log("🚀 ~ arrSum", arrSum);

//! ==========

// const arr = ["Katya", "TARAS", "nastya", "aLonYa", "ALEX", "BogDan"];

// const filteredArr = arr.filter((el) => el === el.toUpperCase());

// console.log(filteredArr);
// console.log(arr);

//! ==========

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((el) => el ** 2);

// console.log("🚀 ~ arr", arr);
// console.log("🚀 ~ newArr", newArr);

//! ==========

// const student = [
//   {
//     name: "Alex",
//     subjects: ["Chemistry", "Computer Sience"],
//   },
//   {
//     name: "Anastasia",
//     subjects: ["PE", "Physics"],
//   },
// ];

// const subjects1 = student.map((el) => el.subjects);
// console.log("🚀 ~ subjects1", subjects1);

// const subjects2 = student.flatMap((el) => el.subjects);
// console.log("🚀 ~ subjects2", subjects2)

//! ==========

// Колекція об'єктів для всіх прикладів з автомобілями

const cars = [
  {
    make: "Honda",
    modcar: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    modcar: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    modcar: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    modcar: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    modcar: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    modcar: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    modcar: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    modcar: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    modcar: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    modcar: "Explorer",
    type: "suv",
    amount: 10,
    price: 31660,
    onSale: false,
  },
];

//* Example 1 - Метод map
// Нехай функція getModcars повертає масив моделей (поле modcar) всіх автомобілів.

// const getModcars = (cars) => cars.map(car => car.modcar);

// console.table(getModcars(cars));

//* Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => ({ ...car, price: car.price * (1 - discount) }));

// console.table(cars);

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// console.table(cars);

//* Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) => cars.filter(car => car.price <= threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

//* Example 4 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// const getCarsWithDiscount = (cars) => cars.filter((car) => car.onSale === true);

// console.table(getCarsWithDiscount(cars));

//* Example 6 - Метод find

// const getCarByModel = (cars, model) => cars.find((car) => car.modcar === model);

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));

//* Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount.

// const sortByAscendingAmount = (cars) =>
//   cars.sort((a, b) => a.amount - b.amount);

// console.table(sortByAscendingAmount(cars));

//* Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order.

// const sortByModel = (cars, order) =>
//   cars.sort((a, b) => {
//     switch (order) {
//       case "asc":
//         return a.modcar.localeCompare(b.modcar);
//       case "desc":
//         return b.modcar.localeCompare(a.modcar);
//     }
//   });

// console.table(sortByModel(cars, "asc"));
// console.table(sortByModel(cars, "desc"));

//* Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// const getTotalAmount = (cars) => cars.reduce((acc, car) => acc + car.amount, 0);

// console.log(getTotalAmount(cars));

//* Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

// const getModelsOnSale = (cars) =>
//   cars
//   .filter((car) => car.onSale === true)
//   .map((car) => car.modcar);

// console.table(getModelsOnSale(cars));

//* Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.

// const getSortedCarsOnSale = (cars) =>
//   cars.filter((car) => car.onSale === true).sort((a, b) => b.price - a.price);

// console.table(getSortedCarsOnSale(cars));

//! =======

// const filteredArr = cars.filter(
//   (car) => car.amount >= 5 && car.price <= 25000
// );
// console.table(filteredArr);
