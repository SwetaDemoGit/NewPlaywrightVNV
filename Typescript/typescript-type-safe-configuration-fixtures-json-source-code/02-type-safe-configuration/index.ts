// Define the expected configuration structure
interface AppConfig {
  appName: string;       // Application name
  port: number;          // Port must be a number
  environment: string;   // Environment name
}

// TypeScript checks that this object follows AppConfig
const config: AppConfig = {
  appName: "MyApp",
  port: 3000,
  environment: "development"
};

console.log("Application:", config.appName);
console.log("Port:", config.port);
console.log("Environment:", config.environment);
