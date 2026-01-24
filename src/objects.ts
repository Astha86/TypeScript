// src: https://prabhatkumarjena16.medium.com/mastering-objects-in-typescript-a-comprehensive-guide-8e7b7733662c

// An object is a collection of key–value pairs, where each key has a defined type

// Object Annotation
let book: Object = {
 title: "Do Epic Shit",
 author: "Ankur Warikoo",
 year: 2021
};

book = []; // No error
book = () => {}; // No error

// 1. Explicit Object Type
let user: { name: string; age: number } = {
  name: "Abc",
  age: 8
};
// Missing or extra properties will cause an error.

// 2. Using interface (Recommended for Objects)
interface User {
  name: string;
  age: number;
  isActive?: boolean; // optional
}

let user2: User = {
  name: "xyz",
  age: 9
};

// 3. Using type (Type Alias)
type User3 = {
  name: string;
  age: number;
};

let user3: User3 = {
  name: "pqr",
  age: 10
};

// 4. Optional Properties (?)
interface User4 {
  name: string;
  age?: number;
}

let user4: User4 = {
  name: "Astha"
};

// 5. Readonly Properties
interface User5 {
  readonly id: number;
  name: string;
}

let user5: User5 = {
  id: 1,
  name: "Astha"
};

// user.id = 2 // Error

// 6. Index Signatures (Dynamic Keys) - Used when object keys are not known in advance
interface Scores {
  [key: string]: number;
}

let marks: Scores = {
  math: 90,
  science: 85
};

// 7. Nested Objects
interface User7 {
  name: string;
  address: {
    city: string;
    pincode: number;
  };
}

let user7: User7 = {
  name: "Ram",
  address: {
    city: "Ayodhya",
    pincode: 123456
  }
};

// 8. Object as Function Parameter
interface User8 {
  name: string;
  age: number;
}

function greet(user: User8): string {
  return `Hello ${user.name}`;
}

// 9. Excess Property Check (Important)
interface User9 {
  name: string;
}

let user9: User9 = {
  name: "asd",
  //age: 11 // Error (extra property)
};

// But this is allowed
let temp = { name: "abc", age: 12 };
let user0: User = temp;

