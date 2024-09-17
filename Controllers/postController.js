// Hard-coded array simulating the DB
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

// -----------------------
// @Desc    Get All Posts :
// @Route   GET /api/posts:
// -----------------------

export const getPosts = (req, res, next) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
};
// -----------------------
// @Desc    Get singel Post
// @Route   /api/posts/:id
// -----------------------
export const getPost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`A Post with that ID ${id} Was Not Found!`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(post);
};
// -----------------------
// @Desc    Create Post
// @Route   GET  /api/posts/
// -----------------------
export const creatPost = (req, res, next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  if (!newPost.title) {
    return res.status(400).json({ msg: "Title is mandatory" });
  }
  posts.push(newPost);
  res.status(201).json(posts);
};
// -----------------------
// @Desc    Update Post
// @Route   PUT  /api/posts/:id
// -----------------------
export const updatePost = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res
      .status(404)
      .json({ msg: `The Post With The ID ${id} Was Not Found` });
  }
  post.title = req.body.title;
  res.status(200).json(posts);
};

// -----------------------
// @Desc    DELETE Post
// @Route   DELETE /api/posts/:id
// -----------------------
export const DELETE_POST = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res
      .status(404)
      .json({ msg: `The Post With The ID ${id} Was Not Found` });
  }
  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
};
