const express = require(`express`);

const User = require(`../db/models/User`);

const router = express.Router();

router.route(`/`)
  .post((req, res) => {
    let {name, email, password} = req.body;
    email = email.toLowerCase();

    return new User({ name, email, password })
      .save()
      .then(user => {
        res.json(user);
      })
      .catch(err => {
        return res.json({ message: err.message });
      });
  })
  .get((req, res) => {
    return User
      .fetchAll()
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        return res.json({ message: err.message });
      });
  })

  router.route(`/:id`) 
  .get((req, res) => {
    return new User()
    .where({ id: req.params.id })
    .fetch({ withRelated: [`posts`]})
    .then(user => {
      if(!user) {
        throw new Error(`User Not Found`);
      }
      return res.json(user);
    })
    .catch(err => {
      return res.json({ message: err.message })
    });
  })

module.exports = router;