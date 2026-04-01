(() => {
  // Type Aliases or Custom Types
  type Role = "admin" | "guess" | "teacher" | "student";

  // Complex Object Type Definition
  type User = {
    name: string;
    age: number;
    role: Role;
    permission: string[];
  };

  let userRole: Role = "admin";

  // function using Role type
  function access(role: Role) {
    return role;
  }

  // all roles allowed
  access("admin");
  access("guess");
  access("teacher");
  access("student");
})();