const { userModel } = require("../models");

let status = 500;
let result = { message: "Something went wrong" };

function getUsers(req, res) {
  try {
    result = userModel.getUsers();
    status = 200;
  } catch (error) {
    console.log(error);
  } finally {
    res.status(status).json(result);
  }
}

function getUserById(req, res) {
  try {
    result = userModel.getUserById(parseInt(req.params.id));
    status = 200;
  } catch (error) {
    console.log(error);
  } finally {
    res.status(status).json(result);
  }
}

function createUser(req, res) {
  try {
    result = userModel.createUser(req.body);
    status = 201;
  } catch (error) {
    console.log(error);
  } finally {
    res.status(status).json(result);
  }
}

function updateUser(req, res) {
  try {
    result = userModel.updateUser(parseInt(req.params.id), req.body.name);
    status = 200;
  } catch (error) {
    console.log(error);
  } finally {
    res.status(status).json(result);
  }
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
};
