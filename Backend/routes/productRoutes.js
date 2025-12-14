const express= require("express").Router();
const {getAllUsers}= require("../controllers/productController");

express.get("/getallUsers",getAllUsers);

module.exports= express;