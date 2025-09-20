// Use ES module syntax for all imports
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

// Load environment variables from .env file
dotenv.config();

// Diagnostic log to check the value of MONGO_URI
console.log("MONGO_URI from .env:", process.env.MONGO_URI);

// The connection function now checks for a valid MONGO_URI
const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error("MONGO_URI is not defined in the environment variables.");
    }
    const conn = await mongoose.connect(uri);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`❌ Error connecting to MongoDB: ${err.message}`);
    process.exit(1);
  }
};

// Connect to the database
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Your routes
app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

// The port from .env or a default
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
