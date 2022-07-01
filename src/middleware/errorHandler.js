const ERROR_HANDLERS = {
  MongoServerError:(res, err) => {
    res
    .status(400)
     .send({ error: err.name, cause: err.message, message: "Repeated or Invalid Data" });
  },
  defaultError: (res, err) => {
    res
    .status(500)
     .send({ error: err.name, cause: err.message });
  },
};

const errorHandler = (err, req, res, next) => {
  const handler = ERROR_HANDLERS[err.name] || ERROR_HANDLERS.defaultError;
  handler(res, err);
};

module.exports = errorHandler;
