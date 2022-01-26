var router = require('express').Router();
const cardsCtrl = require('../controllers/cards');
var usersCtrl = require('../controllers/users');

router.get('/index', cardsCtrl.index);
router.get('/new', cardsCtrl.new);

// router.get('/:id', cardsCtrl.show);
router.post('/', cardsCtrl.create);





// GET /users
router.get('/users', usersCtrl.index);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
router.post('/cards', isLoggedIn, usersCtrl.addCard);

// DELETE /facts/:id
router.delete('/:id', isLoggedIn, cardsCtrl.delCard);
router.put('/:id', isLoggedIn, cardsCtrl.editCard);
router.get('/:id', cardsCtrl.edit);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}
  module.exports = router;