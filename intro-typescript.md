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

## 07-custom-type-role.ts
Shows how to create a custom type for roles using string literal unions to enforce strict allowed values in TypeScript.

## 08-function-return-types.ts
Covers function return types in TypeScript including number, void, and never, as well as function types, callbacks, and typing object methods using interfaces or custom types.

## 09-special-types.ts
Covers special TypeScript types like null and undefined, including strict typing and union types (null | string, undefined | string) to control allowed values.

