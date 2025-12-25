import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Explicitly tell dotenv where .env is
dotenv.config({ path: path.join(__dirname, ".env") });

import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
    console.log("Server started on PORT:",PORT);
});