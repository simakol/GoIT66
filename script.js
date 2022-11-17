// let a = 5;
// let b = a;
// console.log(a, b);

// a = 7;

// console.log(a, b);

// const arr = [1, 2, 3];
// const arr2 = arr.slice(0);

// console.log(arr, arr2);

// arr[1] = 55;
// arr2[0] = 11;

// console.log(arr, arr2);

//! ==================

// const arr = [1, 2, , 4, , 6];
// const indexesOfEmptyElements = [];

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "undefined") indexesOfEmptyElements.push(i);
// }

// console.log(indexesOfEmptyElements);

//! ==================

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 4)); // ["Ajax", "Poly"]

//! ==================

// const dogs = ["Pupic", "Alf", "Rex", "Sharic"];

// for (const dog of dogs) { // let dog = dogs[0]
//   console.log(dog);
// }

//! ==================

// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// let string = "";
// for (const friend of friends) {
//   console.log(friend);
//   string += friend;
//   console.log(string);
// }

// let string = friends.join(" ");
// console.log("🚀 ~ string", string)

//! ==================

//* Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.

// const genres = ["Jazz", "Blues"];
// console.log("🚀 ~ genres", genres);

// genres.push("Rock’n’Roll");

// console.log("🚀 ~ genres", genres);

// console.log(genres[0]);

// const arrLength = genres.length - 1;
// console.log("🚀 ~ arrLength", genres[arrLength]);

// // console.log(genres.shift())
// console.log(genres.splice(0, 1)[0]);
// console.log(genres);

// genres.unshift("Country", "Reggae");
// console.log(genres);

//* Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = "9 11";
// const valuesArray = values.split(" ");
// console.log("🚀 ~ valuesArray", valuesArray);
// const square = valuesArray[0] * valuesArray[1];
// console.log("🚀 ~ square", square)

//* Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i+1}: ${fruits[i]}`);
// }

//* Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";

// const namesArray = names.split(",");
// const phonesArray = phones.split(",");

// // console.log(namesArray, phonesArray);

// for (const i in namesArray) { // for(let i = 0; i < namesArray.length; i++)
//   console.log(`${namesArray[i]}: ${phonesArray[i]}`);
// }

//! ==================

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log("Start");
// for (let i = 0; i < arr.length; i++) {
//   //   if (arr[i] === 5) break;
//   if (arr[i] === 5) continue;
//   else console.log(arr[i]);
// }
// console.log("End");

//! ==================

console.log("abc".padStart(10, "b"))
console.log("abc".padEnd(10, "b"))