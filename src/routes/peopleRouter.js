const express = require("express");
const peopleControllers = require("../controllers/peopleControllers");
const validator = require("express-joi-validation").createValidator({});
const bodySchema = require("..//validators/peopleBodyValidator");
const paramsSchema = require("..//validators/peopleParamsValidator");
// const querySchema = require("..//validators/peopleQueryValidator");


const router = (People) => {
  const peopleRouters = express.Router();

  const {
    getAllPeople,
    getPeopleById,
    postPeople,
    putPeopleById,
    deletePeopleById,
  } = peopleControllers(People);

  peopleRouters
    .route("/people")
    .get(validator.query(bodySchema),getAllPeople)
    .post(validator.body(bodySchema), postPeople);

  peopleRouters
    .route("/people/:id")
    .get(validator.params(paramsSchema),getPeopleById)
    .put(validator.params(paramsSchema),putPeopleById)
    .delete(deletePeopleById);

  return peopleRouters;
};

module.exports = router;
