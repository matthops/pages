const axios = require("axios");

const createNewClient = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { clientName } = req.body;

  dbInstance
    .add_client([clientName])
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err));
};

module.exports = {
  createNewClient
};
