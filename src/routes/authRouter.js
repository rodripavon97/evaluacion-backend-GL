const express = require("express");
const authControllers = require("../controllers/authControllers");

// validator tiene 3 valores de propiedad
//validator.body()
// validator.query()
// validator.params()

const router = (People) => {
  const authRouters = express.Router();
  const { logIn, register } = authControllers(People);

  authRouters.route("/auth/login").post(logIn);

  authRouters.route("/auth/register").post(register);

  return authRouters;
};

module.exports = router;
