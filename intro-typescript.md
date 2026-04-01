# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Shows type inference, explicit typing, and errors when assigning the wrong type.

## 02-vanilla-js-types.js
Demonstrates JavaScript typeof for checking data types at runtime.

## 03-flexible-types.ts
Demonstrates JavaScript typeof for checking data types at runtime.

## 04-arrays-objects.ts
Covers typed arrays, object structures (including nested types), and Record for key-value objects.

## 05-enum.ts
Introduces enums, especially string enums, and how to use them for fixed values.

## 06-alternative-to-enum.ts
Shows how string literal types can replace enums by limiting values to a fixed set and controlling function inputs.

