import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errHandler from "./middleware/errHandler.js";
const app = express();
const PORT = process.env.PORT || 8080;
// Body Parser Mid-Ware ..
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Logger Mid-ware
app.use(logger);
// Err Handler
app.use(errHandler);
// Routing ..
app.use("/api/posts", posts);
app.listen(PORT, () => console.log(`This Server Running on Port ${PORT}`));
