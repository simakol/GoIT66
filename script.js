// const list = document.getElementById("list");

// if (list) {
//   console.log(list.children.length);
// } else {
//   console.log("this element doesn't exist");
// }

//! ====================================

//* 1. Створити список технологій що вивчаються на курсі Fullstack за допомогою js
// Показати як че робиться через **map** та **reduce**

// const container = document.getElementById("container");
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

/*
    1. Створити контейнер для списку - тег ul
    2. Створити цикл для перебoру елементів масиву
    3. Створити тег li 
    4. Записати текст з масиву у тег li
    5. Помістити li всередину списку ul
    6. Помістити список ul на сторінку
*/

// const list = document.createElement("ul");

// for (const technology of technologies) {
//   const liEl = document.createElement("li");
//   liEl.textContent = technology;
//   list.append(liEl);
// }

// container.append(list);

//* map
// const listContent = technologies
//   .map((technology) => `<li>${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", listContent);
// // list.innerHTML = listContent;

// container.append(list);

//* reduce

// const listContent = technologies.reduce(
//   (acc, technology) => (acc += `<li>${technology}</li>`),
//   ""
// );

// list.insertAdjacentHTML("beforeend", listContent);

// container.append(list);

//* reduce 2

// const listContent = technologies.reduce(
//   (acc, technology) => (acc += `<li>${technology}</li>`),
//   ""
// );

// const list = `<ul>${listContent}</ul>`;
// container.insertAdjacentHTML("beforeend", list);

//! ====================================

//* 2. Створити кілька кнопок на основі масива з обєктами використовуючи createElement

// const container = document.getElementById("container");
// const colors = [
//   {
//     label: "red",
//     color: "#FF0000",
//   },
//   {
//     label: "green",
//     color: "#00FF00",
//   },
//   {
//     label: "blue",
//     color: "#0000FF",
//   },
//   {
//     label: "yellow",
//     color: "#FFFF00",
//   },
// ];

/*
    1. Перебрати масив кольорів за допомогою циклу
    2. Створити кнопку 
    3. Задамо колір фону кнопки
    4. Задамо текст кнопки
    5. Додаємо кнопку в документ

*/

// colors.forEach(({ label, color }) => {
//   const buttonEl = document.createElement("button");
//   buttonEl.style.backgroundColor = color;
//   buttonEl.classList.add("indents");
//   //   buttonEl.style.margin = "5px"
//   buttonEl.textContent = label;
//   container.appendChild(buttonEl);
// });
