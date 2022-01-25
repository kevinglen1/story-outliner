var router = require('express').Router();
var usersCtrl = require('../controllers/users');

// GET /users
router.get('/users', usersCtrl.index);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
router.post('/cards', isLoggedIn, usersCtrl.addFact);

// DELETE /facts/:id
router.delete('/facts/:id', isLoggedIn, usersCtrl.delFact);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}

module.exports = router;