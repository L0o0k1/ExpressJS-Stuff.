import express from "express";
const router = express.Router();

let posts = [
  {
    id: 1,
    title: "User One",
  },
  {
    id: 2,
    title: "User Two",
  },
  {
    id: 3,
    title: "User three",
  },
  {
    id: 4,
    title: "User Four",
  },
];

// Get All Posts :
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});
//---------------------------------------
// Get singel Posts :
router.get(":id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({ msg: `Go Back !` });
  }
  res.status(200).json(post);
});

//  Build New Post ..
router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  if (!newPost.title) {
    return res.status(400).json({ msg: "Title is mandatory" });
  }
  posts.push(newPost);
  res.status(201).json(posts);
});
// Update Post ..
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res
      .status(404)
      .json({ msg: `The Post With The ID ${id} Was Not Found` });
  }
  post.title = req.body.title;
  res.status(200).json(posts);
});

// ----------------
export default router;
