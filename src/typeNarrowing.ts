// Source: https://medium.com/@enayetflweb/understanding-type-narrowing-and-type-guards-in-typescript-59c328693f39

// Type narrowing is the process where TypeScript reduces a union type to a more specific type within a certain block of code.
// It’s not syntax, it’s behavior.

//Type guards are the checks/conditions that tell TypeScript how to narrow a type.
// Type guards are the techniques TypeScript uses to do this narrowing.

// 1. typeof Type Guard - Primitive types
function printValue(value: string | number) {
  if (typeof value === "string") {
    // value is string here
    console.log(value.toUpperCase());
  } else {
    // value is number here
    console.log(value.toFixed(2));
  }
}

// 2. instanceof Type Guard - Class instances
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // Dog
  } else {
    animal.meow(); // Cat
  }
}

// 3. in Operator - Property check
type Admin = {
  role: "admin";
  permissions: string[];
};

type User = {
  role: "user";
  email: string;
};

function getDetails(person: Admin | User) {
  if ("permissions" in person) {
    // Admin
    console.log(person.permissions);
  } else {
    // User
    console.log(person.email);
  }
}

// 4. Equality Narrowing (===, !==) - Literal unions
function checkStatus(status: "success" | "error") {
  if (status === "success") {
    console.log("Operation successful");
  } else {
    console.log("Something went wrong");
  }
}

// 5. Discriminated Unions (Most important) - Structured object unions
type Circle = {
  kind: "circle";
  radius: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

function area(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}

// 6. Custom Type Guards (User-defined) - Complex logic
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(animal: Fish | Bird): animal is Fish {
  return "swim" in animal;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim(); // Fish
  } else {
    animal.fly(); // Bird
  }
}

// 7. Truthiness Narrowing - null, undefined, etc
function printLength(value?: string) {
  if (value) {
    console.log(value.length);
  }
}
