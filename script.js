// деструктуризація

// const user = ["Alexey"];
// const firstName = user[0];

// const [, lastName = "Mosh"] = user;
// console.log("🚀 ~ lastName", lastName);

// const [firstName, lastName] = ["Alexey", "Simak"];

// const [firstName = "Alexey", lastName = "Simak"] = [];

// console.log(firstName, lastName);

// const user = {
//   name: "Alexey",
//   age: 25,
// };

// const userName = user.name;
// console.log("🚀 ~ userName", userName)

// const { name: userName, age: userAge = 15, salary = 1000 } = user;
// console.log(userName, userAge, salary);

// const { age, ...other } = user;
// console.log(age, other);

// const {
//   name: userName,
//   age: userAge,
//   salary = 1000,
//   admin: isAdmin = false,
// } = user;
// console.log(userName, userAge, salary, isAdmin);

// const { age, ...other } = user; // ...rest

// console.log(age, other);

// function sumOfAllArgs(...numbersArray) {
//   // ...rest
//   return numbersArray.reduce((sum, number) => (sum += number), 0);
// }

// console.log(sumOfAllArgs(4, 6, 8, 4, 15, 90));
// console.log(sumOfAllArgs(2, 8));

// const arr = [4, 367, 3, 76, 3, 632, 7, 3];

// const max = Math.max(...arr); // ...spread
// console.log("🚀 ~ max", max);

// const min = Math.min(...arr);
// console.log("🚀 ~ min", min);

//!=====

// class Rectangle {
//   constructor(height, width) {
//     this.name = "Rectangle";
//     this.height = height;
//     this.width = width;
//   }
//   sayName() {
//     console.log("Hi, I am a ", this.name + ".");
//   }
//   get area() {
//     return this.height * this.width;
//   }
//   set area(value) {
//     this._area = value;
//   }
// }

// class Square extends Rectangle {
//   constructor(length) {
//     super(length, length);
//     this.name = "Square";
//   }
// }

// const square = new Square(10);

// console.log(square);
// square.sayName();
// console.log(square.area);

// //!=====

// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }

// const arr = [1, 2, 3, 4, 5];

// for (const i in arr) {
//   console.log(arr[i]);
// }

// //!=====

// for (var i = 0; i < 5; i += 1) {
//   console.log(i);
//   var b = 3;
// }

// console.log(i, b);

// if (true) {
//   var c = 99;
// }

// console.log(c);

//hoisting
// var boo = undefined;

// console.log(boo);
// var boo = 10;

// function foo() {
//   //функціональна область видимості
//   var a = 6;
//   return a;
// }

// foo();

// console.log(a);

//!======

// display("Hello, world!"); //"Hello, world!" - аргумент

// // function declaration
// function display(value) {
//   // value - параметр
//   console.log(value);
// }

// display("Hello, world!"); //"Hello, world!" - аргумент

// // console.log(sum(8, 5))

// // function expression
// const sum = function (number1, number2) {
//   // анонімна ф-ція
//   return number1 + number2;
// };

// const result = sum(8, 5);

// console.log("🚀 ~ result", result);

// // arrow function
// // const mult = (number1, number2) => {
// //   return number1 * number2;
// // };

// const mult = (number1, number2) => number1 * number2;

// const result2 = mult(8, 5);

// console.log("🚀 ~ result2", result2);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNums = nums.filter((el) => el % 2 === 0);

// console.log(evenNums);

// (function (num) {
//   console.log(num * num);
// })(10);


//! ======

