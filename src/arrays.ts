// 1. Declartion syntax
const numbers: number[] = [1, 2, 3, 4, 5]; 
const names: string[] = ["Alice", "Bob", "Charlie"];
const num: Array<number> = [1, 2, 3, 4, 5];

// 2. Accessing and Modifying Elements
if (numbers[0] !== undefined) {
  const firstNumber: number = numbers[0];  // Accessing the first element
}
numbers[2] = 42; // Modifying the third element

// 3. Iterating Through Arrays
for (const number of numbers) {
  console.log(number);
}

numbers.forEach((number: number) => {
  console.log(number);
});

// 4. Multidimensional Arrays
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 5. Time Complexity of Array Operations
const strings: string[] = ["a", "b", "c", "d"];

strings.push("e"); // O(1)
strings.pop(); // O(1)
strings.shift(); // O(n)
strings.unshift("0"); // O(n)
strings.splice(1, 0, "1"); // O(n)

// 6. Mixed Type Arrays
let c: (number | string | boolean)[] = [1, "a", true]

// 7. Custom Type Arrays
type Student = {
  name: string;
  age: number
}

type Students = Student[]

let students: Students = [
  {
    name: 'Prabhat',
    age: 26
  },
  {
    name: 'Deba',
    age: 27
  }
]
// 8. Readonly Arrays
type StringArray = Readonly<string[]>; // syntax
type NumberArray = ReadonlyArray<number>; // syntax
let scores: readonly number[] = [85, 92, 78]; // syntax
//scores.push(90); // Error: Property 'push' does not exist on type 'readonly number[]'

