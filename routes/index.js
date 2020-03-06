const express = require('express'),
  ParksModel = require('../models/parks');
router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  const parkList = await ParksModel.getAll();

  res.render('template', {
    locals: {
      title: 'Time to shred bruh!',
      parkList: parkList
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

module.exports = router;
