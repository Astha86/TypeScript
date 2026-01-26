// Enums, short for enumerations that allow you to define a set of named constants. 
// They provide a way to organize related values and make your code more readable and maintainable.

// Basic example

enum Size {
    SMALL,
    MEDIUM,
    LARGE,
}

const size = Size.MEDIUM

// Enum Usage
enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

let today: DaysOfWeek = DaysOfWeek.Wednesday;

console.log(today); // Output: 2 (as enums are zero-indexed by default)
console.log(DaysOfWeek[today]); // Output: "Wednesday"

// --- Practical Example of Enum Usage ----

// String Enum for User Roles
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER"
}

// Interface using the enum
interface User {
  id: number;
  name: string;
  role: UserRole;
}

// Function to check if a user can edit content
function canEdit(user: User): boolean {
  return user.role === UserRole.Admin || user.role === UserRole.Editor;
}

// Creating user objects
const adminUser: User = {
  id: 1,
  name: "Alice",
  role: UserRole.Admin
};

const viewerUser: User = {
  id: 2,
  name: "Bob",
  role: UserRole.Viewer
};

// Using the enum in practice
console.log(`${adminUser.name} can edit: ${canEdit(adminUser)}`); // Output: Alice can edit: true
console.log(`${viewerUser.name} can edit: ${canEdit(viewerUser)}`); // Output: Bob can edit: false

// --Enums as Types--
enum ColorScheme {
  Light = "light",
  Dark = "dark"
}

type ThemeConfig = {
  scheme: ColorScheme;
  fontScale: number;
};

const theme: ThemeConfig = {
  scheme: ColorScheme.Light,
  fontScale: 1.2
};

// --Enums as Unions--
enum UserStatus {
  Active,
  Inactive,
  Suspended
}

function handleUserStatus(status: UserStatus) {
  switch (status) {
    case UserStatus.Active:
      console.log("User is active");
      break;
    case UserStatus.Inactive:
      console.log("User is inactive");
      break;
    case UserStatus.Suspended:
      console.log("User is suspended");
      break;
  }
}

handleUserStatus(UserStatus.Active);

// --Numeric Enums: Initialized--
// You can set the value of the first numeric enum and have it auto increment from that
enum CardinalDirections {
  North = 1,
  East,
  South,
  West
}

console.log(CardinalDirections.North); //  1
console.log(CardinalDirections.West); //  4

// --Numeric Enums: Fully Initialized--
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}

console.log(StatusCodes.NotFound); // 404
console.log(StatusCodes.Success); // 200