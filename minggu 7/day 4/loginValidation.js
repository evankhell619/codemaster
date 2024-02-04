import { validationResult } from "express-validator";

const loginValidation = () => [
  body("email", "email not valid").notEmpty().isEmail(),
  body("password", "pass at least 8 char").isLength({
    min: 8,
  }),
];

const regisValidation = () => [
  body("email", "email not valid").notEmpty().isEmail(),
  body("password", "pass at least 8 char").isLength({
    min: 8,
  }),
  body("passwordConfirm", "pass not macth").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Pass confirmation not macth");
    }
    return true;
  }),
];

(req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json(parseErrors(result.array()));
  }
  res.json({
    msg: "login succes",
    token: "xxx",
  });
};

const parseErrors = function (err) {
  return err.map(function (e) {
    return { path: e.path, message: e.msg };
  });
};

export default { loginValidation, regisValidation, parseErrors };
