var router = require('express').Router();
const cardsCtrl = require('../controllers/cards');

router.get('/index', cardsCtrl.index);
router.get('/new', cardsCtrl.new);
// router.get('/:id', cardsCtrl.show);
router.post('/', cardsCtrl.create);

  module.exports = router;