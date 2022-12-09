// class User {
//   constructor({ name, age, salary }) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }

//   sayHello() {
//     return `Hello! My name is ${this.name}, I'm ${this.age} years old!`;
//   }
// }

// const user = new User({ name: "Alex", age: 30, salary: 1500 });

// class Vehicle {
//   constructor({ model, color, wheels }) {
//     this.model = model;
//     this.color = color;
//     this.wheels = wheels;
//   }
//   showInfo() {
//     return `Vehicle: ${this.model} | color: ${this.color}`;
//   }
// }

// class Car extends Vehicle {
//   constructor({ model, color, wheels, amountOfSits, amountOfDoors }) {
//     super({model, color, wheels});
//     this.amountOfSits = amountOfSits;
//     this.amountOfDoors = amountOfDoors;
//   }
// }

// const car = new Car({
//   model: "Tesla model X",
//   color: "black",
//   wheels: 4,
//   amountOfSits: 8,
//   amountOfDoors: 4,
// });
// console.log(car);
// console.log(car.showInfo());

//! ======

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

//! ======

//* Example 5 - Toggle
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.

// class Toggle {
//   constructor(settings) {
//     // this.on = settings ? settings.isOpen : false;
//     this.on = settings?.isOpen || false;
//   }

//   //   constructor({ isOpen = false } = {}) {
//   //     this.on = isOpen;
//   //   }

//   toggle() {
//     this.on = !this.on; // this.on = !this.on -> this.on = !true -> this.on = false
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group("firstToggle");
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd("firstToggle");

// const secondToggle = new Toggle();
// console.group("secondToggle");
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd("secondToggle");

//* Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// class Notes {
//   static Priority = {
//     LOW: "low",
//     NORMAL: "normal",
//     HIGH: "high",
//   };

//   static findNoteIndexByText(items, text) {
//     return items.findIndex((note) => note.text === text);
//   }

//   constructor(items) {
//     this.items = items;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     const index = Notes.findNoteIndexByText(this.items, text);
//     this.items.splice(index, 1);
//   }

//   updatePriority(text, newPriority) {
//     const index = Notes.findNoteIndexByText(this.items, text);
//     this.items[index].priority = newPriority;
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: "Моя перша замітка", priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: "Моя друга замітка",
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote("Моя перша замітка");
// console.log(myNotes.items);

// myNotes.updatePriority("Моя друга замітка", Notes.Priority.HIGH);
// console.log(myNotes.items);

//* Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

class User {
  #login;
  #email;

  constructor({ login, email }) {
    this.#login = login;
    this.#email = email;
  }

  set login(login) {
    this.#login = login;
  }

  get login() {
    return this.#login;
  }

  set email(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }
}

const mango = new User({
  login: "Mango",
  email: "mango@dog.woof",
});

console.log(mango.login); // Mango
mango.login = "Mangodoge";
console.log(mango.login); // Mangodoge

const poly = new User({
  login: "Poly",
  email: "poly@mail.com",
});

console.log(poly.email); // poly@mail.com
poly.email = "poly12345@mail.com";
console.log(poly.email); // poly12345@mail.com
