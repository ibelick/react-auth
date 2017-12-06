const express = require('express')
const app = express()
const postRouter = express.Router()

const Post = require('../models/post')

postRouter.route('/add/post').post(function (req, res) {
  var post = new Post(req.body);
      post.save()
    .then(post => {
      res.json('Post added successfully');
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
})

postRouter.route('/').get(function (req, res) {
  Post.find(function (err, post) {
    if(err) {
      console.log(err)
    } else {
      res.json(post)
    }
  })
})

postRouter.route('/:param').get(function (req, res, next) {
  let param = req.param("param");
  Post.findOne({title: param}).exec(function (err, post) {
    console.log(post);
    res.json(post)
  })
})

module.exports = postRouter
