// const outputScrollStandart = document.getElementById("outputScrollStandart");
// const outputScrollThrottling = document.getElementById(
//   "outputScrollThrottling"
// );
// const eventScrollCounter = {
//   standart: 0,
//   throttled: 0,
// };

// document.addEventListener("scroll", () => {
//   eventScrollCounter.standart += 1;
//   outputScrollStandart.textContent = eventScrollCounter.standart;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventScrollCounter.throttled += 1;
//     outputScrollThrottling.textContent = eventScrollCounter.throttled;
//   }, 1500)
// );

//!================================

// const outputResizeStandart = document.getElementById("outputResizeStandart");
// const outputResizeThrottling = document.getElementById(
//   "outputResizeThrottling"
// );
// const eventResizeCounter = {
//   standart: 0,
//   throttled: 0,
// };

// window.addEventListener("resize", () => {
//   eventResizeCounter.standart += 1;
//   outputResizeStandart.textContent = eventResizeCounter.standart;
// });

// window.addEventListener(
//   "resize",
//   _.throttle(() => {
//     eventResizeCounter.throttled += 1;
//     outputResizeThrottling.textContent = eventResizeCounter.throttled;
//   }, 1500)
// );

//!================================

// const nameInput = document.getElementById("nameInput");

// nameInput.addEventListener(
//   "input",
//   _.debounce(handleInputDebounce, 1000, {
//     leading: true, // виконується одразу, якщо тру
//     trailing: false,
//   })
// );

// function handleInputDebounce({ target }) {
//   console.log(target.value);
// }

//!================================

// const CORRECT_INPUT_LENGTH = {
//   min: 3,
//   max: 15,
// };
// const CLASS_NAMES = {
//   wrong: "wrong",
//   correct: "correct",
// };

// const signInForm = document.getElementById("signInForm");

// signInForm.addEventListener(
//   "input",
//   _.debounce(({ target }) => {
//     if (
//       target.value.length < CORRECT_INPUT_LENGTH.min ||
//       target.value.length > CORRECT_INPUT_LENGTH.max
//     ) {
//       target.classList.add(CLASS_NAMES.wrong);
//       target.classList.remove(CLASS_NAMES.correct);
//     } else {
//       target.classList.add(CLASS_NAMES.correct);
//       target.classList.remove(CLASS_NAMES.wrong);
//     }
//   }, 800)
// );

//!================================

// const characters = ["%", "$", "*", "!"];
// console.log(isStrHasCapitalLetter("qwerty", "qwerty"));
// console.log(isStrHasCapitalLetter("qwerty", "qWerty"));

// function isStrHasCapitalLetter(str1, str2) {
//   return str1.toLowerCase() !== str2;
// }

// console.log(isStrHasSpecialChar("qwerty")); //false
// console.log(isStrHasSpecialChar("qwer*ty")); //true

// function isStrHasSpecialChar(str) {
//   const charArr = str.split("");

//   for (const char of charArr) {
//     if (characters.includes(char)) return true;
//   }

//   return false;
// }
