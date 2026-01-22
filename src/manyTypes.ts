// 1. Type Assertions (as)
// A type assertion tells TypeScript: “Trust me, I know the actual type.”
// When to use: DOM elements, Third-party libraries, 100% sure of the type

// eg:1 
let num = "abc";
let st: string = num as string;

// eg: 2
const input = document.getElementById("email") as HTMLInputElement;
input.value = "test@example.com";

// eg: 3 - Assertion with union
function getLength(value: string | number) {
  return (value as string).length;
}

// eg: 4
type person = {
    name: string;
}
let personString = '{"name":"Ram"}';
let personObject = JSON.parse(personString) as person;

console.log(personObject.name);

// 2. unknown Type (Safe alternative to any)
// unknown means: “I don’t know the type yet, but I’ll check before using it.”
let data: unknown;

data = "hello";
data = 42;

// ❌ Error
// data.toUpperCase();

if (typeof data === "string") {
  // ✅ Safe - You must narrow before using
  console.log(data.toUpperCase());
}

// 3. never Type (Impossible values): never represents values that never occur
// When to use: Function never returns, Exhaustive checks fail, Code is unreachable

// eg:1 - Function never returns
function throwError(message: string): never {
  throw new Error(message);
}

// eg:2 - Infinite loop
function infiniteLoop(): never {
  while (true) {}
}

// eg:3 - Exhaustive checking (important)
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };


function area(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    default:
      const _exhaustive: never = shape;
      return _exhaustive;
  }
}

// The never assignment in the default case ensures exhaustive checking, 
// so if a new union member is added and not handled, TypeScript throws a compile-time error.
