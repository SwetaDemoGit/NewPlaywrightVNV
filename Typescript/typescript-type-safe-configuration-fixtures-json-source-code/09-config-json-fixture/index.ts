interface AppConfig {
  appName: string;
  port: number;
  environment: string;
}

// Configuration stored as JSON fixture data
const configJson = `{
  "appName": "Demo App",
  "port": 3000,
  "environment": "test"
}`;

// Convert JSON text into a typed configuration value
const config = JSON.parse(configJson) as AppConfig;

console.log("Application:", config.appName);
console.log("Port:", config.port);
console.log("Environment:", config.environment);
