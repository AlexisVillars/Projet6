/* Import des modules necessaires */
const express = require("express");
const router = express.Router();
const sauceCtrl = require("../controllers/sauce");
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');




/* Routage sauces */
router.get("/", auth, sauceCtrl.getAllSauce);
router.get("/:id", auth, sauceCtrl.getOnesauce);
router.post("/", auth, multer, sauceCtrl.createSauce);
router.post("/:id/like", auth, sauceCtrl.likeSauce);
router.delete("/:id", auth, sauceCtrl.deleteSauce);
router.put("/:id", auth, multer, sauceCtrl.modifySauce);





module.exports = router;
