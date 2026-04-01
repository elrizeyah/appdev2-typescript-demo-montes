"use strict";
// Literal type
let userRole1;
// function 1
function access(role) {
    return role;
}
// function 2 (no SuperAdmin)
function anotherUserAccess(role) {
    return role;
}
// calls
access("Teacher");
access("Student");
access("Principal");
access("Guest");
access("SuperAdmin"); // ✅ valid
// access("Admin"); ❌ ERROR (not allowed)
// anotherUserAccess("SuperAdmin"); ❌ ERROR
anotherUserAccess("Teacher"); // ✅ valid
