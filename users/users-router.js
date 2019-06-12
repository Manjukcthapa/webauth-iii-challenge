const router = require('express').Router();

const Users = require('./users-models');
const restricted = require('../Auth/restricted-midleware.js');


router.get('/', restricted,  (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;