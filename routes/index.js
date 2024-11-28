var express = require('express');
var router = express.Router();
const data = require('../controller/data')
/* GET home page. */
router.route('/')
  .get(data.empresas)

module.exports = router;
