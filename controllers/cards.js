var User = require("../models/user");

module.exports = {
  index,
  create,
  new: newCard,
  delCard,
  editCard,
  edit,
};

function index(req, res) {
  res.render("users/index", { user: req.user });
}

function create(req, res, next) {
  req.user.cards.push(req.body);
  req.user.save(function (err) {
    res.redirect("/cards/index");
  });
}
function newCard(req, res) {
  res.render("users/new");
}
function edit(req, res) {
  res.render("users/edit", { card: req.user.cards.id(req.params.id) });
}

function delCard(req, res, next) {
  User.findOne({ "cards._id": req.params.id }, function (err, user) {
    user.cards.id(req.params.id).remove();
    user.save(function (err) {
      res.redirect("/cards/index");
    });
  });
}
function editCard(req, res, next) {
  req.user.cards.id(req.params.id).sceneType = req.body.sceneType;
  req.user.cards.id(req.params.id).position = req.body.position;
  req.user.cards.id(req.params.id).startingValue = req.body.startingValue;
  req.user.cards.id(req.params.id).endingValue = req.body.endingValue;
  req.user.cards.id(req.params.id).description = req.body.description;
  req.user.save(function (err) {
    res.redirect("/cards/index");
  });
}
