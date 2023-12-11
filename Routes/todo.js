const express = require("express");
const router = express.Router();
const tirth = require("../controllers/createTodo")


router.route("/").get(tirth.home);
   
router.route("/register").get(tirth.register);

module.exports = router