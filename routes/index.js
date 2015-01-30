var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/pointcloud', function(req, res) {
  res.render('lion_las');
});

module.exports = router;
