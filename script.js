// Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);

// Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students += 50; // students = students + 50
// // students -= 10;
// console.log(students);

// Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення константи result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// let num = 4;
// console.log(num ** 0.5)
// console.log(num)

// Example 4 - Клас Math
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення константи value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.9;
// console.log(Math.floor(value))
// console.log(Math.ceil(value))
// console.log(Math.round(value))

// Example 5 - Шаблонні рядки
// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = "88,3";
// let height = "1.75";

// variant 1

// weight = Number(weight.replace(",", "."));
// height = Number(height.replace(",", "."));

// const bmi = +(weight / Math.pow(height, 2)).toFixed(1);
// console.log(bmi); // 28.8

// variant 2

// 1. Знайти індекс коми
// 2. Скопіюємо число після коми
// 3. Cлеїмо цілу частину з дробовою і поставио правильний розділювач (.)

// const commaIndex = weight.indexOf(",");
// const valueAfterComma = weight.slice(commaIndex + 1);
// const valueBeforeComma = Number.parseInt(weight);

// weight = +`${valueBeforeComma}.${valueAfterComma}`;

// const bmi = +(weight / Math.pow(height, 2)).toFixed(1);
// console.log(bmi); // 28.8

// Example 7 - Оператори порівняння та приведення типів
// Яким буде результат виразів?

// console.log(5 > 4); //true

// console.log(10 >= '7'); //true

// console.log('2' > '12'); // true
// '2' > '1' -> 50 > 49
// console.log("1234".charCodeAt(0))

// console.log('2' < '12'); // false

// console.log('4' == 4); // true

// console.log('6' === 6); // false

// console.log('false' === false); // false

// console.log(1 == true); // true

// console.log(1 === true); // false

// console.log('0' == false); // true

// console.log('0' === false); // false

// console.log('Papaya' < 'papaya'); // true


// console.log('Papaya' === 'papaya'); // false

// console.log(undefined == null); // true

console.log(undefined === null); // false

