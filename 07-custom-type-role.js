"use strict";
(() => {
    let userRole = "admin";
    // function using Role type
    function access(role) {
        return role;
    }
    // all roles allowed
    access("admin");
    access("guess");
    access("teacher");
    access("student");
})();
