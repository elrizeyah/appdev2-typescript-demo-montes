"use strict";
// Optional Values in parameter
function generateError(msg) {
    throw new Error(msg);
}
generateError("An error occured");
// generateError()
(() => {
    let user = {
        name: 'Elmer',
        age: 31
    };
    console.log(user.name);
    console.log(user.age);
})();
// Nullish Coalescing `??` operator 
let input = '';
const didProvideInput = input ?? false;
let notLoggedIn = 0;
let accessToSystemLog = notLoggedIn || "Logged In";
console.log(accessToSystemLog);
// try it on browser console log to see results
// update it `??` to `||`
// `||` check for falsy not false - falsy = null, undefined, 0, empty string, etc
// ?? check only if null or undefined
// Use || when you want to fall back on any falsy value.
// Use ?? when you only want to fall back on null or undefined.
