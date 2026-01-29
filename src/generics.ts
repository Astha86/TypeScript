// https://medium.com/@ignatovich.dm/typescript-generics-a-simple-guide-with-practical-examples-ca3492eb821f

// --Generics--

// A generic function that takes an argument of any type and returns it
function identity<T>(arg: T): T {
    return arg;
}

// Using the generic function with different types
let output1 = identity<string>("Hello, Generics!");
let output2 = identity<number>(42);

console.log(output1); // Output: Hello, Generics!
console.log(output2); // Output: 42

// A generic class that holds a value of any type
class GenericBox<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

// Using the generic class with different types
let stringBox = new GenericBox<string>("Generic String");
let numberBox = new GenericBox<number>(100);

console.log(stringBox.getValue()); // Output: Generic String
console.log(numberBox.getValue()); // Output: 100

//  Generic Arrays
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

let numArray = [1, 2, 3];
let strArray = ["a", "b", "c"];

console.log(getFirstElement(numArray)); // Output: 1
console.log(getFirstElement(strArray)); // Output: a

// Generics with Multiple Types
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

let merged = mergeObjects({ name: "Alice" }, { age: 30 });
console.log(merged); // Output: { name: 'Alice', age: 30 }

// Generic Constraints
interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

logLength("Hello, World!"); // Output: 13
logLength([1, 2, 3, 4]);    // Output: 4
// logLength(42); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.

// Generic Interfaces
interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

let pair: KeyValuePair<string, number> = { key: "age", value: 25 };
console.log(pair); // Output: { key: 'age', value: 25 }

// Generic Type Aliases
type Wrapper<T> = {
    value: T;
};

let wrappedString: Wrapper<string> = { value: "Wrapped!" };
let wrappedNumber: Wrapper<number> = { value: 123 };

console.log(wrappedString); // Output: { value: 'Wrapped!' }
console.log(wrappedNumber); // Output: { value: 123 }

// --Utility Types--
// Partial Type
interface User {
    id: number;
    name: string;
    email: string;
}

type PartialUser = Partial<User>;

let updateUser: PartialUser = {
    name: "Bob"
};

// Readonly Type
type ReadonlyUser = Readonly<User>;

let readonlyUser: ReadonlyUser = {
    id: 1,
    name: "Charlie",
    email: "charlie@example.com"
};
// readonlyUser.name = "Dave"; // Error: Cannot assign to 'name' because it is a read-only property.

// Pick Type
type UserNameEmail = Pick<User, "name" | "email">;

let userContact: UserNameEmail = {
    name: "Eve",
    email: "eve@example.com"
};

console.log(userContact); // Output: { name: 'Eve', email: 'eve@example.com' }