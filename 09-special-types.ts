(() => {

    // Special Type - null
    let a: null = null;
    // a = "Hi" // ❌ not allowed

    let b: null | string;

    b = null;
    b = "Hi";
    // b = 10 // ❌ not allowed

    // Special Type - undefined
    let c: undefined = undefined;
    // c = null // ❌ not allowed
    // c = "Hi" // ❌ not allowed

    let d: undefined | string;

    d = undefined;
    d = "Hi";
    // d = null // ❌ not allowed
    // d = 10 // ❌ not allowed

})();