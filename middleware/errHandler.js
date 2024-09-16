const errHandler = (err, req, res, next) => {
  if (err.status) {
    res.status(404).json({ msg: err.message });
  }
};

export default errHandler;
