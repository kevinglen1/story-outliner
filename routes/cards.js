var router = require("express").Router();
const cardsCtrl = require("../controllers/cards");

router.get("/index", cardsCtrl.index);
router.get("/new", isLoggedIn, cardsCtrl.new);
router.post("/", isLoggedIn, cardsCtrl.create);
router.delete("/:id", isLoggedIn, cardsCtrl.delCard);
router.put("/:id", isLoggedIn, cardsCtrl.editCard);
router.get("/:id", isLoggedIn, cardsCtrl.edit);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}
module.exports = router;
