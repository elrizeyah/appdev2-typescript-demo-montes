let age: any = 24;

// reassign different types to test "any"
age = 24;
age = true;
age = {};
age = [];

console.log(typeof age);