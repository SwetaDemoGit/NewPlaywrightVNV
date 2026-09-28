interface User {
  name: string;
  age: number;
  email: string;
}

function updateUser<T>(user: T, updates: Partial<T>): T {
  return {
    ...user,
    ...updates
  };
}

const user: User = {
  name: "John",
  age: 25,
  email: "john@example.com"
};

const updatedUser = updateUser(user, { age: 26 });

console.log(updatedUser);
