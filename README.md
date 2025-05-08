## How does TypeScript help in improving code quality and project maintainability?

Scaling and maintaining code can be difficult for software development. Maintaining an organised, comprehensible, and scalable codebase becomes very important when developers collaborate on projects with several team members.

### How TypeScript enhances code maintainability and scalability with Static Typing?

TypeScript provide powerful solution to improve code maintainability and scalability through static typing.

### What is TypeScript?**

TypeScript is an open-source programming language developed and maintained by Microsoft. As well as it is the superset of JavaScript that adds static typing to the language, llowing developers to catch errors at compile-time rather than runtime.

## Benefits of Static Typing

### Type Safety
Developers can avoid type-related mistakes at runtime by defining the data types of variables, arguments, and return values using static typing.

**Example:TypeScript catches type mismatches during development.**

```ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

greet("Alice");   // OK
greet(123);       //Error: Argument of type 'number' is not assignable to parameter of type 'string'.

```
### Code Readability:
TypeScript makes code more readable and self-documenting because its explicitly specifying types. This is easy to  comprehension and easy to developed.

```ts
type User = {
  id: number;
  username: string;
  isAdmin: boolean;
};

const user: User = {
  id: 1,
  username: "Tanvir",
  isAdmin: false,
};


```

### Refactoring Support:
Static typing provides better support for code refactoring, wchich bost confidance to developer changinf in the code base and error ditection.


### Summary: How TypeScript Improves Code Quality and Project Maintainability

- **Preventing runtime errors through static typing.**
- **Making code easier to read and understand.**
- **Making refactoring safer.**
- **Improving collaboration among developers.**
- **Allowing early adoption of modern JavaScript features.**





# Differences Between Interfaces and Types in TypeScript

In TypeScript both `interface` and `type` are powerful tools used to define the the structure of data. Both give reasult similar but they have unique features and use cases that make them different.

## What is an Interface?
An `interface` in TypeScript is used to define the structure of an object.
**Example:**
```ts
interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Alice"
};
```

## What is a Type Alias?
Type alias more suitable beacause its define object shapes as well as unions, intersections, tuples.
```ts
type Product = {
  id: number;
  price: number;
};

const item: Product = {
  id: 101,
  price: 29.99
};
```
### Key Differences Between interface and type
- **interface Can extend other interfaces as well as type Can extend interfaces and types**.
- **Interface Better for defining object models on the other hand type batter for complex or union types**.


# What is the use of the keyof keyword in TypeScript?
keyof keyword is used to recive the keys of a given type as a union of string literal types.

### KeyOf uses 
Its ensure safe type and ensure only accessing valid property names.

**Example:**
```ts
type User = {
  id: number;
  name: string;
  email: string;
};

// `keyof User` will be "id" | "name" | "email"
type UserKeys = keyof User;

let key: UserKeys;

key = "name";   // OK for declear right type
key = "email";  //OK for declear right type
key = "age";    // Error: Type '"age"' is not assignable to type '"id" | "name" | "email"'

```

Another thing is we can use keyof in generic functions for safely access object properties

**Example:**
```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = { id: 1, name: "Tanvir", email: "tanvir@example.com" };

const userName = getProperty(user, "name"); // Returns "Tanvir"

```





