const { find } = require('../models/user');
var User = require('../models/user');

module.exports = {
    index,
    create,
    new: newCard
};

function index(req, res) {
    User.cards.findAll({}), function(err, i){
        console.log(i)
    res.render('users/index', {user: req.user});
    }}

function create(req, res, next) {
    console.log(req.user)
    console.log(req.body)
    req.user.cards.push(req.body)
    req.user.save(function(err) {
      res.redirect('/users')

})}
function newCard(req, res) {
      res.render('users/new');
    }
