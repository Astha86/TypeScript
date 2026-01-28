// https://medium.com/@baruahd5/object-oriented-programming-oops-using-typescript-cdbffd7d0cf5
//  https://medium.com/@iamabhinav30/object-oriented-programming-in-typescript-concepts-examples-real-world-analogies-3d37e5ccb17f


// --classes and objects--

//Error
// class Employee1{
//   name: string; 
//   age: number;
// }

// With '!' character, we are informing the TSC (TypeScript Compiler) that although we haven’t initialized 
// the properties properly, it should overlook this issue as we have alternate plans for these properties.
class Employee2{
  name!: string; //Error
  age!: number;  //Error
}

class Employee{
  //properties
  name: string;
  age: number;

  //constructor
  constructor(n: string, a: number){
    this.name= n;
    this.age=a;
  }
}

let emp1 = new Employee("John", 24); // object emp instanciated of type Employee and hence consumed some space in the memory
console.log(emp1.name); // accessed the property 'name' of the object emp of type Employee
console.log(emp1.age);

//--Encapsulation
class BankAccount {
  private balance: number = 0;
  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }
  public getBalance(): number {
    return this.balance;
  }
  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }
}
// You cannot directly access a bank vault (private balance), but you can deposit or check it via secure teller (methods).
function main1(): void {
  const account = new BankAccount(1000);
  account.deposit(1000);
  console.log("Balance:", account.getBalance());
}
main1();

// --Inheritance--

// 1. Single Inheritance
class Vehicle1 {
  speed: number;
  constructor(speed: number) {
    this.speed = speed;
  }

  //method
  start(): void {
    console.log("Vehicle started at speed:", this.speed);
  }
}

class Car1 extends Vehicle1 {
  brand: string;
  constructor(speed: number, brand: string) {
    super(speed);
    this.brand = brand;
  }
  honk(): void {
    console.log(`${this.brand} says: Beep beep!`);
  }
}

function main(): void {
  const myCar = new Car1(60, "Toyota");
  myCar.start();
  myCar.honk();
}
main();

// 2. Multiple Inheritance:
// Interface for Flying behavior
interface Flying {
    fly(): void;
}
// Interface for Swimming behavior
interface Swimming {
    swim(): void;
}
// Class implementing both interfaces
class Bird implements Flying, Swimming {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    fly() {
        console.log(`${this.name} is flying.`);
    }
    swim() {
        console.log(`${this.name} is swimming.`);
    }
}
// Creating an instance of Bird
const myBird = new Bird('Robin');
// Accessing methods from both Flying and Swimming interfaces
myBird.fly();
myBird.swim();

// 3. Multi-level Inheritance:
// Grandparent class
class Vehicle {
    startEngine() {
        console.log('Engine started.');
    }
}
// Parent class inheriting from Vehicle
class Car extends Vehicle {
    drive() {
        console.log('Car is being driven.');
    }
}
// Child class inheriting from Car
class SportsCar extends Car {
    race() {
        console.log('Sports car is racing!');
    }
}
// Creating an instance of SportsCar
const mySportsCar = new SportsCar();
// Accessing methods from all levels of inheritance
mySportsCar.startEngine(); // Access from Vehicle
mySportsCar.drive(); // Access from Car
mySportsCar.race(); // Access from SportsCar

//--Polymorphism--

//1. Method Overriding (Runtime Polymorphism) : allows us to redefine a method from the superclass within the child class
class WorkingHour {
  time() {
    console.log("Business is open between 8am and 5pm")
  }
}
class Market extends WorkingHour {
  //if we remove the '?' on the parameter 'isBossOnVacation' we will recieve an error
  //Error: Type '(isBossOnVacation: boolean) => void' is not assignable to type '() => void'.
  time(isBossOnVacation?: boolean): void {
    if (isBossOnVacation == true) {
      console.log("business is close");
    } else {
      console.log("Business is open between 9am and 4pm")
    }
  }
}

const instance = new Market();
instance.time(); //Output: Business is open between 9am and 4pm
instance.time(true); //Output: business is close


//2. Method Overloading (Compile-Time Polymorphism Simulation)
class Calculator {
  add(a: number, b: number): number;
  add(a: number, b: number, c: number): number;
  add(a: number, b: number, c?: number): number {
    return c ? a + b + c : a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3));      // 5
console.log(calc.add(1.5, 2.5, 3.5));  // 7.5

// --Abstraction--
abstract class Children {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    display(): void{
        console.log(this.name);
    }
}

class Student extends Children { 
    rollNo: number;
    
    constructor(name: string, rollNo: number) { 
        super(name); // must call super()
        this.rollNo = rollNo;
    }
}

let emp: Children = new Student("John", 100);
emp.display(); 

// Interface: Defines a contract that a class must follow.
interface Flyable {
  fly(): void;
}

class Bird2 implements Flyable {
  fly(): void {
    console.log("Flying...");
  }
}

// Readonly Properties
class Product {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}
const p = new Product(101);
// p.id = 202; Error

// Static Members: Belong to class, not object.
class MathUtils {
  static PI = 3.14;

  static square(x: number): number {
    return x * x;
  }
}
MathUtils.square(5);

// -- Association, Aggregation & Composition--

// 1. Association: A general relationship between two objects.
class Pen {
  write(): void {
    console.log("Writing...");
  }
}

class Student2 {
  private pen: Pen;
  constructor(pen: Pen) {
    this.pen = pen;
  }
  takeNotes(): void {
    this.pen.write();
  }
}

// 2. Aggregation: A “has-a” relationship with independent life cycle.
class Student3 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class College {
  private students: Student3[];
  constructor(students: Student3[]) {
    this.students = students;
  }
  listStudents(): void {
    this.students.forEach(s => console.log(s.name));
  }
}

// 3. Composition: A “has-a” relationship with strong ownership.
class Room {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
}

class House {
  private kitchen: Room;
  private bedroom: Room;
  constructor() {
    this.kitchen = new Room("Kitchen");
    this.bedroom = new Room("Bedroom");
  }
  describe(): void {
    console.log(`House has ${this.kitchen.type} and ${this.bedroom.type}`);
  }
}