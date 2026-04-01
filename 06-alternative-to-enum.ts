// Literal type
let userRole1: "Teacher" | "Student" | "Principal" | "Guest" | "SuperAdmin";

// function 1
function access(role: "Teacher" | "Student" | "Principal" | "Guest" | "SuperAdmin") {
  return role;
}

// function 2 (no SuperAdmin)
function anotherUserAccess(role: "Teacher" | "Student" | "Principal" | "Guest") {
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