import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

console.log("Current working directory:", process.cwd());

const envPath = path.resolve(process.cwd(), '.env');
console.log(".env file path being checked:", envPath);
console.log("Does the .env file exist at this path?", fs.existsSync(envPath));

console.log("\nAttempting to load .env variables...");
const result = dotenv.config({ path: envPath, debug: true });

if (result.error) {
  console.error("Error loading .env file:", result.error);
} else {
  console.log("Successfully loaded .env file.");
  console.log("Parsed variables:", result.parsed);
}

console.log("\nFinal value of MONGO_URI from process.env:", process.env.MONGO_URI);
console.log("Final value of PORT from process.env:", process.env.PORT);

console.log("\nIf MONGO_URI above is 'undefined' or a local connection string,");
console.log("the .env file is either not being read, or the variable is not set correctly.");
```
***
**Instructions to run the script:**

1.  **Save** the content above into a file named **`check_env.js`** in the same directory as your `.env` and `package.json` files.
2.  Open your terminal, navigate to that directory, and run the script:
    ```bash
    node --require=dotenv/config check_env.js
    
