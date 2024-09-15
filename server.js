import express from "express";
import path from "path";
import posts from "./routes/posts.js";
const app = express();
const PORT = process.env.PORT || 8080;
// Body Parser Mid-Ware ..
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routing ..
app.use("/api/posts", posts);
app.listen(PORT, () => console.log(`This Server Running on Port ${PORT}`));
