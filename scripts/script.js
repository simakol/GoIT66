// console.log("before try catch");

// try {
//   const data = '{"name":"John", "age":30, "car":null}';
//   console.log(JSON.parse(data));
// } catch (err) {
//   console.error(err.message);
// }

// for (let i = 0; i < 10; i++) {
//   try {
//     if (i === 5) throw new Error("i is 5");
//     console.log(i);
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// console.log("after try catch");

//! =======

// const save = (key, value) => {
//   try {
//     const serializedData = JSON.stringify(value);
//     localStorage.setItem(key, serializedData);
//   } catch (err) {
//     console.error(err.message);
//   }
// };

// const load = (key) => {
//   try {
//     const serializedData = localStorage.getItem(key);
//     return serializedData === null ? undefined : JSON.parse(serializedData);
//   } catch (err) {
//     console.error(err.message);
//   }
// };

// const remove = (key) => {
//   try {
//     localStorage.removeItem(key);
//   } catch (err) {
//     console.error("Remove state error: ", err.message);
//   }
// };

// const theme = {
//   current: "light",
// };

// const theme1 = {
//   current: "dark",
// };

// save("theme", theme);
// save("theme-1", theme1);

// console.log(load("theme"));
// console.log(load("theme-1"));
// console.log(load("theme-2"));

// remove("theme-1");
// console.log(load("theme-1"));

// const formData = {
//   email: "aaa@gmail.com",
//   message: "hello",
// };

// save("feedback-form-state", formData);

// const data = load("feedback-form-state").message;

// console.log(data);

//! =======

/*
Написати Todo-list де можна створювати, видаляти елементи та реалізувати збереження списку в локал сторедж

Стилі та розмітку можна взяти тут - 

https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo
*/

/*
- без локального сховища
    1. написати логіку додавання задачі по натисканню на кнопку едд
        1.1. зчитати значення з поля вводу
        1.2. робимо перевірку на пусту строку, якщо вона пуста, повідомляємо про це користувача і не додаємо задачу
        1.3. якщо задача є, то створюємо пункт списку в який додаємо текст задачі
        1.4. додати хрестик до пункту списку
        1.5. очистити поле вводу
    2. написати логіку стану задачі(виконана чи ні)
        2.1. по натисканню на лішку - тоглити класс чекд
    3. написати логіку видалення задачі зі списку
        3.1. якщо ми натиснули на хрестик - видаляємо лішку зі сторінки

- з локальним сховищем
    1. будемо зберігати задачі у вигляді масиву обʼєктів
        1.1. обʼєкт з полями: text, isDone, id. ID потрібне для пошуку елементів, для видалення елементів і для оновлення статусу елементів. Ідентифікатор повинен бути як і у елементу, так і у обʼєкту у сховищі.
    2. коли ми додаємо лі на сторінку, будемо додавати її у сторедж
    3. написати логіку функції, яка буде діставати дані з стореджа і додавти їх на сторінку у вигляді лішок
    4. написати логіку для видалення таски зі стору і для оновлення стану таски.

*/

import { addNewTask, handleTaskBehaviour, fillTasksList } from "./functions.js";

const addBtn = document.getElementById("addBtn");
const myUL = document.getElementById("myUL");

addBtn.addEventListener("click", addNewTask);
myUL.addEventListener("click", handleTaskBehaviour);
window.addEventListener("DOMContentLoaded", fillTasksList);
