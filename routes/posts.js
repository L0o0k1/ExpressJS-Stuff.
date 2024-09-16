import express from "express";
import {
  getPosts,
  getPost,
  creatPost,
  updatePost,
  DELETE_POST,
} from "../Controllers/postController.js ";
const router = express.Router();

router.get("/", getPosts); // To Get All Posts
router.get("/:id", getPost); // To Get Single Post
router.post("/", creatPost); // To create Single Post
router.put("/:id", updatePost); // To Update Single Post
router.delete("/:id", DELETE_POST); // To Delete Single Post

// ----------------
export default router;
