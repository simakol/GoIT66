// console.log("A");

// Promise.reject("B")
//   .then(
//     (value) => console.log(value),
//     (err) => console.error("C")
//   )
//   //   .catch((err) => console.error("C"))
//   .finally(() => console.log("D"));

// console.log("E");

//!==============================

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(2), 1000);
//   resolve(1);
// });

// promise.then((value) => console.log(value));

//!==============================

// console.log("Request data...");

// setTimeout(() => {
//   console.log("Preparing data...");

//   const data = {
//     id: 1,
//     text: "lorem ipsum dolor sit amet.",
//     status: "important",
//   };

//   setTimeout(() => {
//     console.log("Data received: ", data);
//   }, 2000);
// }, 2000);

// console.log("Request data...");

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("Preparing data...");

//     const data = {
//       id: 1,
//       text: "lorem ipsum dolor sit amet.",
//       status: "important",
//     };

//     if (!data.id) rej(new Error("No id!"));
//     res(data);
//   }, 2000);
// });

// promise
//   .then((data) => {
//     // return new Promise((res) => {
//     //   console.log("Data changed");
//     //   data.status = "ordinary";
//     //   res(data);
//     // });
//     console.log("Data changed");
//     data.status = "ordinary";
//     return data;
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err))
//   .finally(() => console.log("Promise end"));

// promise
//   .then((data) => {
//     const p = new Promise((res) => {
//       console.log("Data changed");
//       data.status = "ordinary";
//       res(data);
//     });

//     p.then((data) => console.log(data));
//   })
//   .catch((err) => console.error(err))
//   .finally(() => console.log("Promise end"));

//!==============================

// const promise = new Promise((resolve, reject) => {
//   resolve("OK");
//   reject("Error: smth went wrong");
// });

// promise.then((value) => console.log(value));

//!==============================

const sleep = (ms) => new Promise((res) => setTimeout(() => res(ms), ms));

// sleep(2000).then(value => console.log(`after ${value}ms`))
// sleep(5000).then(value => console.log(`after ${value}ms`))

Promise.all([sleep(2000), sleep(5000)]).then((value) => {
  console.log(value);
  console.log("All promises");
});

// Promise.race([sleep(2000), sleep(5000), sleep(500)]).then((value) => {
//   console.log(value);
//   console.log("Race promises");
// });
