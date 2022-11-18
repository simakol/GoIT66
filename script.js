// function add(a, b) {
//   return a + b;
// }

// const sum = add(1, 5);
// const sum2 = add(sum, 5);

// console.log(sum2);

//! =======

// function addPositive(a, b) {
//   if (a >= 0 && b >= 0) {
//     return a + b;
//   } else {
//     return 0;
//   }
// }

// const sum = addPositive(-1, 5);
// console.log(sum);
// const sum2 = addPositive(sum, 15);

// console.log(sum2);

//! =======

//* Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8

// function calcBMI(weight, height) {
//   weight = replaceCommaToDot(weight);
//   height = replaceCommaToDot(height);
//   return getRoundedNumber(weight / height ** 2);
// }

// function replaceCommaToDot(string) {
//   // let string = "88,3"
//   return string.replace(",", ".");
// }

// function getRoundedNumber(number) {
//   return Number(number.toFixed(1));
// }

//! =======

//* Example 6 - Пошук найбільшого елемента
// Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.

// function findLargestNumber(numbers) {
//   // let numbers = [5, 1, 7];
//   let max = numbers[0]; // 5
//   for (const number of numbers) {
//     /*
//         1. {
//             number = 5
//             if (number(5) > max(5)) //false max = number;
//         }
//         2. {
//             number = 1
//             if (number(1) > max(5))//false max = number;
//         }
//         3. {
//             number = 7
//             if (number(7) > max(5)) max = number(7);
//         }

//     */
//     if (number > max) max = number;
//   }
//   return max;
// }

// console.log(findLargestNumber([5, 1, 7]));

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

//! =======

//* Example 7 - Середнє значення
// Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// function calAverage() {
//   const numbers = arguments;
//   const numbersAmount = numbers.length;
//   let sum = 0;
//   for (const number of numbers) {
//     sum += number; // sum = sum + number;
//   }
//   return sum / numbersAmount;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
