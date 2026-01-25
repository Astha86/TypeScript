// 1. Function Declaration
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// 2. Function Expression
const calculateArea = function(width: number, height: number): number {
  return width * height;
};

// 3. Arrow Functions
const multiply = (a: number, b: number): number => {
  return a * b;
};

const square = (x: number): number => x * x;

// Default and Optional Parameters in TypeScript
function createProfile(name: string, age: number, bio?: string, isPremium: boolean = false): string {
  let profile = `Name: ${name}, Age: ${age}`;
  if (bio) profile += `, Bio: ${bio}`;
  profile += `, Premium: ${isPremium}`;
  return profile;
}

console.log(createProfile("Alice", 30)); // Output: Name: Alice, Age: 30, Premium: false
console.log(createProfile("Bob", 25, "Developer")); // Output: Name: Bob, Age: 25, Bio: Developer, Premium: false
console.log(createProfile("Charlie", 35, undefined, true)); // Output: Name: Charlie, Age: 35, Premium: true

// Custom Parameters and Return Types in TypeScript
enum ProjectStatus {
  Planning = "Planning",
  InProgress = "In Progress",
  Completed = "Completed"
}

type Project = {
  id: number;
  name: string;
  status: ProjectStatus;
  budget: number;
};

function updateProjectStatus(project: Project, newStatus: ProjectStatus): Project {
  console.log(`Updating ${project.name} status to ${newStatus}`);
  return { ...project, status: newStatus };
}

let webApp: Project = {
  id: 1,
  name: "E-commerce Platform",
  status: ProjectStatus.Planning,
  budget: 50000
};

console.log(updateProjectStatus(webApp, ProjectStatus.InProgress));

// Function Call Signatures in TypeScript
type GreetingFunction = (greeting: string) => string;

type Person = {
  name: string;
  age: number;
  country: string;
  greet: GreetingFunction;
};

let person: Person = {
  name: "Alice",
  age: 28,
  country: "Canada",
  greet: (greeting) => {
    return `${greeting}, I'm ${person.name} from ${person.country}`;
  },
};

console.log(person.greet("Hi there")); // Output: Hi there, I'm Alice from Canada

// Void Type
function logMessage(message: string): void {
  console.log(`Log: ${message}`);
}

logMessage("Operation completed");

// Never Type
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

function infiniteLoop(): never {
  while (true) {
    // Some operation
  }
}

// Async Functions in TypeScript
async function fetchUserData(userId: number): Promise<User> {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    if (!response.ok) {
      throw new Error('User not found');
    }
    const userData: User = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

interface User {
  id: number;
  name: string;
  email: string;
}

// Usage
async function displayUserInfo(userId: number) {
  try {
    const user = await fetchUserData(userId);
    console.log(`User: ${user.name}, Email: ${user.email}`);
  } catch (error) {
    console.log('Failed to fetch user info');
  }
}

displayUserInfo(123);

// Rest Parameters and Arguments in TypeScript
// Rest Parameters
function sumNumbers(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumNumbers(1, 2, 3, 4)); // Output: 10
console.log(sumNumbers(10, 20)); // Output: 30

// Rest Arguments (Spread Operator)
const fruits = ['apple', 'banana'];
const allFruits = ['orange', ...fruits, 'mango'];

console.log(allFruits); // Output: ['orange', 'apple', 'banana', 'mango']

// Using spread with function calls
const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // Output: 3

// Function Overloading in TypeScript
function greet2(name: string): string;
function greet2(name: string, age: number): string;
function greet2(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}! You are ${age} years old.`;
  }
  return `Hello, ${name}!`;
}

console.log(greet2("Alice"));          // Output: Hello, Alice!
console.log(greet2("Bob", 30));        // Output: Hello, Bob! You are 30 years old.
