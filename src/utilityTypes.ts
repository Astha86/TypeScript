// 1. Partial<Type>: This simplifies creating objects by making all the properties otpional in data type, u don't need to use all the properties of types
type student = {
    name: string;
    rno: number;
    result: boolean
}

const updateStudent = ( updates: Partial<student>) => {
    console.log("Updating student with : ", updates);
}

updateStudent({rno: 8});
updateStudent({name: "Ram"});
updateStudent({}); // even u can pass empty objects too

// 2. Required<Type>: Make all the properties in type required vice versa of Partial<Type>, no matter that u mark them as optional still all properties are required
type teacher = {
    name?: string;
    id?: number;
}

const updateTeacher = ( updates: Required<teacher>) => {
    console.log("Updating teacher with : ", updates);
}

updateTeacher({
    id: 8, 
    name: "Ram"
});

// 3. Pick<Type, Keys>: allows you to create a new type by selecting specific properties (`Keys`) from an existing type (`Type`)
type Person = {
    name: string;
    age: number;
    gender: string;
    address: string;
}
type PersonDetails = Pick<Person, 'name' | 'age'>;
const person: PersonDetails = {
    name: 'John',
    age: 30,
};

// 4. Omit<Type, Keys>: creates a new type by excluding specific properties from an existing type
type User = {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserProfile = Omit<User, 'id' | 'age'>;  // Create a new type by excluding `id` and `age` from the `User` type
const user: UserProfile = { name: 'Jane Doe', email: 'jane@example.com' };

// 5. Readonly<Type>: makes all properties of a type immutable
interface Config {
  apiUrl: string;
  timeout: number;
}

const config: Readonly<Config> = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
};

// Attempting to modify `config` will result in a TypeScript error
// config.apiUrl = 'https://new-api.example.com'; // Error: Cannot assign to 'apiUrl' because it is a read-only property.