// Source: https://harish-git.medium.com/in-typescript-both-type-and-interface-are-used-for-defining-custom-data-structures-but-they-have-875f91387139
// https://medium.com/@leivadiazjulio/typescript-types-vs-interfaces-a-practical-guide-afdc8fef7515

// ---Interface is mainly used to describe the shape of an object (especially in OOP-style code)---

// 1. Extensible by Declaration Merging
interface Animal {
    name: string;
}

interface Animal {
    age: number;
}

// Merged interface
// Result: { name: string; age: number; }
const myPet: Animal = { name: "Fluffy", age: 3 };

// 2. Declaration of Object Shapes
interface Person {
    name: string;
    age: number;
}

function greet(person: Person) {
    return `Hello, ${person.name}!`;
}

// 3. Extends in TypeScript
interface Base {
    foo: number;
    bar: string;
}

interface Extended extends Base {
    baz: boolean;
}

// ---Type creates an alias for any type, not just objects---

// 1. Union Types
// Union Type Declaration
let myVar: string | number;

// Assigning string value
myVar = "Hello, TypeScript!";
console.log(myVar); // Output: Hello, TypeScript!

// Assigning number value
myVar = 42;
console.log(myVar); // Output: 42

// 2. Intersection Types
// Intersection Type Declaration
type Admin = {
    name: string;
    isAdmin: boolean;
};

type Employee = {
    name: string;
    empID: number;
};

// Intersection of Admin and Employee types
type AdminEmployee = Admin & Employee;

// Creating an object of type AdminEmployee
let adminEmployee: AdminEmployee = {
    name: "John Doe",
    isAdmin: true,
    empID: 12345
};

console.log(adminEmployee.name);   // Output: John Doe
console.log(adminEmployee.isAdmin); // Output: true
console.log(adminEmployee.empID);   // Output: 12345