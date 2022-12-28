// function foo(num) {
//   console.log("foo:", num);

//   this.count++;
// }

// foo.count = 0;

// for (let i = 0; i < 5; i += 1) {
//   foo.call(foo, i);
// }

// foo(6); //window.count++
/*
window.count = undefined;
window.count++ //undefined + 1 === NaN
window.count = NaN

те саме що і foo.call(window, 6)
*/

// foo.call(foo, 1) //context - foo
// foo.call(foo, 3) //context - foo
/*
foo.count++;

*/

// console.log(foo.count);

// foo(6); //window

// const obj = {
//   a: 5,
//   showCntx: foo,
// };

// obj.showCntx(4); //obj
// console.log(obj);

// "/this в callback-функціях/ Пояснить яким чином повязани  getFullName та callback()  /
// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     console.log(this);
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(
//   customer.getFullName.bind(customer)
// ); // Буде помилка у виклику функції"

// function foo() {
//   console.log(this.a);
// }

// window.a = 5;

// foo();

// const obj = {
//     a: 10,
//     showA: foo
// }

// obj.showA()

//* Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const currentStone = this.stones.find((stone) => stoneName === stone.name);
//     return currentStone.price * currentStone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

//* Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//     return this.contacts;
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   phonebook.add({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

//* Example 3 - Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.

// const calculator = {
//   a: 0,
//   b: 0,
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(3, 5);
// console.log("🚀 ~ calculator", calculator);

// console.log(calculator.add());
// console.log(calculator.mult());
