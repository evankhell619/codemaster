//midleware 1
const timeLog = (req, res, next) => {
  console.log("Time", Date.now());
  next();
};

// midleware2
const loggerMiddle = (req, res, next) => {
  console.log(` permintaan ke : ${req.method} ${req.url}`);
  next();
};
// app.use(loggerMiddle);

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
