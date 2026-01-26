// Fixed-Length Arrays with Predefined Types
// Tuples in TypeScript allow you to create arrays with a fixed number of elements, 
// where each element can have a specific type. Let’s explore various tuple scenarios:

// Basic Tuple
let employee: [string, string, number];
employee = ["Alice", "Johnson", 30]; // U have to give values in the same order

// Tuple with Optional Elements
let customer: [string, string, number, string?];
customer = ["Bob", "Smith", 25, "bob@example.com"];

// Tuple with Rest Elements
type TeamRoster = [number, boolean, ...string[]];

const winningTeam: TeamRoster = [5, true, "Emma", "Liam", "Olivia"];
const losingTeam: TeamRoster = [2, false, "Noah"];

// Tuples with Specific Patterns
type StringBoolsNumber = [string, ...boolean[], number];
type BoolsStringNumber = [...boolean[], string, number];

let dataSet1: StringBoolsNumber = ["data", true, false, true, 42];
let dataSet2: BoolsStringNumber = [false, true, "result", 100];

// Readonly Tuples
type ReadOnlyCoordinate = Readonly<[number, number, number]>;  // syntax
type ReadOnlyEmployee = readonly [string, string, number]; // syntax
let employee2: ReadOnlyEmployee = ["Jane", "Doe", 28];
// employee2[1] = "Smith"; // Error: Cannot assign to '1' because it is a read-only property


// --Real-World Example: Returning Multiple Values--

// Without tuples:
function getUser() {
  return { name: "Pavan", age: 28 };
}

// With tuples:
function getUserTuple(): [string, number] {
  return ["Pavan", 28];
}

const [name, age] = getUserTuple();
console.log(`${name} is ${age} years old.`);
// Tuples are compact, fast, and perfect for multi-value returns (like useState in React).