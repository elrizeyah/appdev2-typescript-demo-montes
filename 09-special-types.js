"use strict";
(() => {
    // Special Type - null
    let a = null;
    // a = "Hi" // ❌ not allowed
    let b;
    b = null;
    b = "Hi";
    // b = 10 // ❌ not allowed
    // Special Type - undefined
    let c = undefined;
    // c = null // ❌ not allowed
    // c = "Hi" // ❌ not allowed
    let d;
    d = undefined;
    d = "Hi";
    // d = null // ❌ not allowed
    // d = 10 // ❌ not allowed
})();
