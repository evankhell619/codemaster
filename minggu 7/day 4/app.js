import express from "express";
import { validationResult, query, body } from "express-validator";
// import { regisValidation } from "./loginValidation.js";
const app = express();
app.use(express.json());

app.get("/", query("person").notEmpty(), (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ error: result.array() });
  }
  res.json({ message: `Hellow ${req.query.person}` });
});

const loginValidation = () => [
  body("email", "email not valid").notEmpty().isEmail(),
  body("password", "pass at least 8 char").isLength({
    min: 8,
  }),
];

app.post("/login", loginValidation(), (req, res) => {
  const result = validationResult(req);
  const errors = result
    .array()
    .map((error) => ({ path: error.path, message: error.msg }));

  if (!result.isEmpty()) {
    return res.status(400).json(errors);
  }
  res.json({
    msg: "login succes",
    token: "xxx",
  });
});

app.post(
  "/regis",
  [
    body("email", "Email not valid").notEmpty().isEmail(),
    body("password", "Password should be at least 8 characters long").isLength({
      min: 8,
    }),
    body("passwordConfirm", "Passwords do not match").custom(
      (value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Password confirmation does not match");
        }
        return true;
      }
    ),
  ],
  (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    res.json({
      msg: "Registration successful",
      token: "xxx",
    });
  }
);

export default app;
