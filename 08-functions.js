"use strict";
(() => {
    // Function Return Value Types
    function add(a, b) {
        return a + b;
    }
    add(5, 10);
    // add("5", 10)
    // Special Type `void` - return nothing
    function log(message) {
        console.log(message);
    }
    log("Hello, World!");
    // Special Type `never`
    function logAndThrow(errorMessage) {
        console.log(errorMessage);
        throw new Error(errorMessage);
    }
    // Function as Types
    function performJob(cb) {
        cb('Job Done!');
    }
    let logMsg = (msg) => {
        console.log(msg);
    };
    performJob(logMsg);
    let user = {
        name: "Ellissea",
        age: 25,
        greet() {
            console.log(`Hello, ${this.name}`);
            return this.name;
        }
    };
    user.greet();
})();
