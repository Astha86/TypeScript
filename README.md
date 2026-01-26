# TypeScript 

Hey there! TypeScript is like JavaScript’s sophisticated cousin. It’s a statically typed *superset of JavaScript* that adds some extra features to the language.  It adds features like:

![TypeScript features](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*JUCqB1K0CDTfo0f8HtH5MQ.png)
- **Static typing**: Prevents runtime errors by catching issues during development.
- **Better tooling**: Enhanced code completion, refactoring, and debugging.
- **Scalability**: Simplifies management of large codebases.
## Why Use TypeScript?
- **Error Prevention**: Catch type-related errors before runtime.
- **Improved Productivity**: IDEs offer better autocompletion and type inference.
- **Ecosystem Support**: Works with modern frameworks like React, Angular, and Node.js.



## TypeScript Setup

### 1. Local Installation
#### a. Initialize a project
```bash
npm init -y
```

#### b. Install TypeScript
```bash
npm install --save-dev typescript
```
or
```bash
npm i -D typescript
```


### 2. Setting Up a Basic Project
####  a. Create folders

Create the following folder structure:

- src/
- dist/


Add files inside the src folder as per your requirements (e.g., index.ts).

####  b. Add scripts in package.json
```bash
"scripts": {
  "start": "node dist/index.js",
  "dev": "npx tsc"
}
```

### 3. Configuring TypeScript with `tsconfig.json`
####  a. Generate configuration file
```bash
npx tsc --init
```

####  b. Compile the project
```bash
npx tsc
```


This will compile TypeScript files from src into JavaScript files inside dist.

## Types in TypeScript

TypeScript supports various data types, broadly categorized into Primitive and Non-Primitive types.

### 1. Primitive Types in TypeScript

Primitive types are the most basic data types that represent simple values. Here are some of the core primitive types in TypeScript:

- **Number**: Represents numeric values
eg: `let count: number = 42;`

- **String**: Represents textual data
eg: `let message: string = "hello";`

- **Boolean**: Represents true or false
eg: `let isActive: boolean = true;`

- **Null**: Represents an explicitly empty value, useful when intentionally leaving a value absent
eg: `let value: null = null;`


- **Undefined**: Represents an uninitialized value, indicating that a variable has been declared but not yet assigned a value.
eg: `let data: undefined;`

### 2. Non-Primitive Types in TypeScript

Non-primitive types are more complex structures, often used to organize and manipulate data:

- **Objects**: A collection of key-value pairs
eg: `let user: { name: string; age: number };`


- **Arrays**: A list of items of a specific type
eg:
```
let names: string[];
let numbers: Array<number>;
```

- **Tuples**: A fixed-length array with specific types for each element.
eg: `let userInfo: [string, number] = ["abc", 8];`


- **Enums**: A set of named constants
eg:
```
enum Color {
  Red,
  Green,
  Blue
}
```

- **Functions**: Defines parameter and return types for functions.
eg: `const add = (x: number, y: number): number => x + y;`


- **Union Types**: Allows a variable to hold any of a set of specified types.
eg: `let id: string | number;`


- **Intersection Types**: Combines multiple types into one.
eg:
```
type TypeA = { a: string };
type TypeB = { b: number };
type Combined = TypeA & TypeB;
```

- **Interfaces**: Defines the structure of an object
eg:
```
interface User {
  name: string;
  age: number;
}
```

- **Type Aliases**: Creates a custom name for a type
eg: `type ID = string | number;`

## Array Methods and Operations

TypeScript arrays come with a range of built-in methods for common operations, such as adding, removing, and manipulating elements. Some of these methods include:

- **push()**: Adds one or more elements to the end of the array.

- **pop()**: Removes and returns the last element.

- **shift()**: Removes and returns the first element.

- **unshift**: Adds one or more elements to the beginning of the array.

- **splice()**: Can add, remove, or replace elements at specific positions in the array.

- **map()**: Applies a function to each element and returns a new array.

- **filter()**: Creates a new array with elements that pass a specific test.

- **reduce()**: Reduces the array to a single value through a provided function.

- **sort()**: Sorts the elements of the array.