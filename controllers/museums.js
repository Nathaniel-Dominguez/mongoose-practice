// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

const db = require('../models');

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all museums
  res.render('museums/index');
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  db.Museum.create(req.body)
  	.then( newMuseum => {
  		console.log('success')
  		res.redirect('/museums')
  	})
  	.catch(err => {
  		console.log(err);
  		res.send(err)
  	});
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new museum
  res.render('museums/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders museum details
  //  and a list of pieces that musuem contains
  res.send('museums/show');
});

module.exports = router;
