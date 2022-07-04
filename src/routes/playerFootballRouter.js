const express = require("express");
const playerFootballController = require("../controllers/playerFootballController");
const validator = require("express-joi-validation").createValidator({});
const {bodySchema, paramsSchema, querySchema} = require("../validators/playerFootballValidator")
// const bodySchema = require("../validators/playerFootballBodyValidator");
// const paramsSchema = require("../validators/playerFootballParamsValidator");
// const querySchema = require("../validators/playerFootballQueryValidator");
const router = (Club) => {
  const playerFootballRouter = express.Router();

  const { getAllClub, postClub, getClubById, putClubById, deleteClubById } =
    playerFootballController(Club);

  playerFootballRouter
    .route("/playerFootball")
    .get(validator.query(querySchema), getAllClub)
    .post(validator.body(bodySchema), postClub);

  playerFootballRouter
    .route("/playerFootball/:id")
    .get(validator.params(paramsSchema), getClubById)
    .put(validator.params(paramsSchema), putClubById)
    .delete(validator.params(paramsSchema), deleteClubById);

  return playerFootballRouter;
};

module.exports = router;
