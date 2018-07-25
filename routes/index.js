var express = require('express');
var router = express.Router();
const classroomController = require('../controllers').classroom;

router.get('/api/classroom', classroomController.index);
router.post('/api/classroom', classroomController.create);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
