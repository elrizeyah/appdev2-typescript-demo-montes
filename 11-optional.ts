// Optional Values in parameter
function generateError(msg?: string) {
    throw new Error(msg);
}

generateError("An error occured");
// generateError()


(() => {
    // Optional Values in object properties
    type User = {
        name: string;
        age: number;
        role?: 'admin' | 'guess';
    };

    let user: User = {
        name: 'Elmer',
        age: 31
    };

    console.log(user.name);
    console.log(user.age);
})();


// Nullish Coalescing `??` operator 
let input = '';
const didProvideInput = input ?? false;

let notLoggedIn: number = 0;

let accessToSystemLog = notLoggedIn || "Logged In";

console.log(accessToSystemLog);

// try it on browser console log to see results
// update it `??` to `||`
// `||` check for falsy not false - falsy = null, undefined, 0, empty string, etc
// ?? check only if null or undefined

// Use || when you want to fall back on any falsy value.
// Use ?? when you only want to fall back on null or undefined.