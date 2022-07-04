const bcrypt = require("bcrypt");
const httpStatus = require("../helpers/httpStatus");

// Create a new controller club

const ClubController = (Club) => {
  //Search All Clubs
  const getAllClub = async (req, res, next) => {
    try {
      const { query } = req;
      const response = await Club.find(query);
      return res.status(httpStatus.OK).json(response);
    } catch (error) {
      next(error);
    }
  };
  //Create Club
  const postClub = async (req, res, next) => {
    try {
      const { body } = req;
      const club = await new Club(body);
      await club.save();
      res.status(httpStatus.CREATED).json(club);
    } catch (error) {
      next(error);
    }
  };

  //Search by id
  const getClubById = async (req, res, next) => {
    try {
      const { params } = req;
      const response = await Club.findById(params.id);

      if (response === null) {
        return res
          .status(httpStatus.FORBIDDEN)
          .send("Sorry but there is no id, please enter a valid id");
      }

      return res.status(httpStatus.OK).send(response);
    } catch (error) {
      next(error);
    }
  };

  //Edit by Id
  const putClubById = async (req, res, next) => {
    try {
      const { body, params } = req;
      const response = await Club.updateOne(
        {
          _id: params.id,
        },
        {
          $set: {
            firstName: body.firstName,
            lastName: body.lastName,
            nationality: body.nationality,
            dateOfBirth: body.dateOfBirth,
            club: body.club,
            codeFifa: body.codeFifa,
          },
        }
      );
      return res.status(httpStatus.CREATED).json(response);
    } catch (error) {
      next(error);
    }
  };

  //Delete by Id
  const deleteClubById = async (req, res, next) => {
    try {
      const { params } = req;
      await Club.findByIdAndDelete(params.id);
      return res.status(httpStatus.OK).send("Sorry you have been removed");
    } catch (error) {
      next(error);
    }
  };

  return {
    getAllClub,
    postClub,
    getClubById,
    putClubById,
    deleteClubById
  };
};
module.exports = ClubController;
