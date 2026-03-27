// console.log("Hello World!")

let userName: string = "Ellissea";
let userAge = 24;

// ...

userAge =24

console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)

function add(a: number, b = 7):number {
    return a + b
}

add(8)
// add(9)
add(9)
// add(9)

//Show Value
console.log(add(8))
console.log(add(9))