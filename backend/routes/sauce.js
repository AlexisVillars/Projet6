/* Import des modules necessaires */
const express = require("express");
const router = express.Router();
const sauceCtrl = require("../controllers/sauce");

/* Routage User */
router.get("/", sauceCtrl.getAllSauce);


module.exports = router;
