// server/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToMongoDB from './db/connectToMongoDB.js';
import JobRoute from "./router/job.router.js"


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/",JobRoute)
// Allow requests from frontend
app.use(
  cors({
    origin: "http://localhost:5173", // 
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ['Content-Type', 'Authorization'],
  
  })
);  


// MongoDB Connection
connectToMongoDB();


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

