let hobbies = ["Painting", "Singing"];

// hobbies.push(10)

let userList: Array<string | number>;

userList = ["Ellissea", "Ell07", 798465];

console.log(userList);

let user: {
    name: string;
    age: number;
    hobbies: Array<string>;
    role: {
        description: string;
        id: number;
    };
} = {
    name: "Ellissea",
    age: 24,
    hobbies: ["Dancing", "Playing Ukulele"],
    role: {
        description: "admin",
        id: 1
    }
};

console.log(user);

// Must not null or undefined
let val: {} = "Ellissea Montes";
console.log(val);

// Flexible Object - Record Type
let data: Record<string, number | string>;

data = {
    1: 1,
    name: "Ellissea"
    // isPartTimeInstructor: true
};

console.log(data);