import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./src/configs/mongodb.js";
import { clerkWebhooks } from "./src/controllers/webhook.js";

const app = express();
await connectDB();
app.use(cors());

//routes
app.get("/", (req, res) => res.send("Connected API"));
app.post("/clerk", express.json(), clerkWebhooks);

//port
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
