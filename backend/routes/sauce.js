/* Import des modules necessaires */
const express = require("express");
const router = express.Router();
const sauceCtrl = require("../controllers/sauce");
const auth = require('../middleware/auth');


/* Routage User */
router.get("/", auth, sauceCtrl.getAllSauce);
router.get("/", auth, sauceCtrl.getOnesauce);



module.exports = router;
