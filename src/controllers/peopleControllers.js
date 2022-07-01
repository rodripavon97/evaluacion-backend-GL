const bcrypt = require("bcrypt");
const httpStatus = require('../helpers/httpStatus')

const peopleControllers = (People) => {
  const getAllPeople = async (req, res, next) => {
    try {
      const { query } = req;
      const response = await People.find(query);

      return res.status(httpStatus.OK).json(response);
    } catch (err) {
      next(err);
    }
  };

  const postPeople = async (req, res, next) => {
    try {
      const { body } = req;
      const encryptedPassword = await bcrypt.hash(body.password, 10);
      const encryptedData = {
        ...body,
        password: encryptedPassword,
      };
      const people = await new People(encryptedData);
      await people.save();

      return res.status(httpStatus.CREATED).json(people);
    } catch (err) {
      next(err);
    }
  };
  const getPeopleById = async (req, res, next) => {
    try {
      const { params } = req;
      const response = await People.findById(params.id);
      // const checkId = await People.find()
      if (response === null) {
        return res.status(httpStatus.NOT_FOUND).send("no existe ese Id");
      }
      return res.status(httpStatus.OK).json(response);
    } catch (err) {
      next(err);
    }
  };

  const putPeopleById = async (req, res, next) => {
    try {
      const { params, body } = req;

      const encryptedPassword = await bcrypt.hash(body.password, 10);

      const response = await People.updateOne(
        {
          _id: params.id,
        },
        {
          $set: {
            firstName: body.firstName,
            lastName: body.lastName,
            username: body.username,
            password: encryptedPassword,
            password2: body.password2,
            email: body.email,
            address: body.address,
            phone: body.phone,
          },
        }
      );
      return res.status(httpStatusCode.CREATED).json(response);
    } catch (err) {
      next(err)
    }
  };

  const deletePeopleById = async (req, res, next) => {
    try {
      const { params } = req;

      await People.findByIdAndDelete(params.id);

      return res.status(httpStatus.OK).send("Usted ha sido deleteado por el gato");
    } catch (err) {
      next(err)
    }
  };

  return {
    getAllPeople,
    getPeopleById,
    postPeople,
    putPeopleById,
    deletePeopleById
  };
};
module.exports = peopleControllers;
