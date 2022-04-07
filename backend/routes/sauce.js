/* Import des modules necessaires */
const express = require("express");
const router = express.Router();
const sauceCtrl = require("../controllers/sauce");
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');



/* Routage User */
router.get("/", auth, sauceCtrl.getAllSauce);
router.get("/:id", auth, sauceCtrl.getOnesauce);
router.post("/", auth, multer, sauceCtrl.createSauce);



module.exports = router;
