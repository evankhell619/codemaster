const checkToken = (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (token !== "1234") {
    return res.status(403).json({ message: "Forbidden" });
  }

  next();
};

export { loggerMiddle, timeLog, checkToken };
