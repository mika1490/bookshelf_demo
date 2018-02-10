const express = require(`express`);

const Post = require(`../db/models/Post`)

const router = express.Router();

router.route(`/`)
  .post((req, res) => {
    const { title, body, author_id } = req.body;
    
    return new Post({ title, body, author_id })
    .save()
    .then(post => {
      return res.json(post);

    })
    .catch(err => {
      return res.json({ message: err.message })
    })
  })
  .get();

router.route(`/:id`)
  .get();

module.exports = router;