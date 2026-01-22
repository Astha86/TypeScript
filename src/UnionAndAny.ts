// A union type is a type that allows a variable to be one of several types. 
// This means that the variable can hold a value that matches any one of the types specified. 
// You define a union type using the pipe (|) symbol.

let random: string | number = "Hello";
random = 10;

// user can give type
let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';
apiRequestStatus = 'success';

// --- any ----
// The special type any is used to tell TypeScript that a variable can be of any type. 
// A variable with the type any means can be a string , a number or anything else!

let x; // by default any
x = 8;
x = 'abc'
console.log(x); 
console.log(x.length); // this won't give error coz of any

// we should not use any in code coz using any for a variable type in TypeScript is similar to write JavaScript.