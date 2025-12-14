const express= require("express").Router();
const {getAllUsers}= require("../controller/userController");

express.get("/getallUsers",getAllUsers);
module.exports= express;