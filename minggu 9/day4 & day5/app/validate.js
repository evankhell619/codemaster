export const validateTokenReq = (req, res, next) => {
  const error = {};
  if (!req.body.email) {
    error.email = "email required";
  }
  if (!req.body.password) {
    error.password = "pass error";
  }
  if (Object.keys(error).length > 0) {
    return res.status(422).json(error);
  }
  next();
};
