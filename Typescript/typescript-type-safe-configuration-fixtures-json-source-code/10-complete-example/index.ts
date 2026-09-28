interface AppConfig {
  appName: string;
  port: number;
  environment: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

// Configuration fixture
const configJson = `{
  "appName": "Demo App",
  "port": 3000,
  "environment": "test"
}`;

// User fixture
const userJson = `{
  "id": 1,
  "name": "John",
  "email": "john@example.com"
}`;

// Convert JSON text into typed values
const config = JSON.parse(configJson) as AppConfig;
const user = JSON.parse(userJson) as User;

console.log("Application:", config.appName);
console.log("Port:", config.port);
console.log("Environment:", config.environment);

console.log("User ID:", user.id);
console.log("User Name:", user.name);
console.log("User Email:", user.email);
