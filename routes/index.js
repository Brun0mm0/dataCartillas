var express = require('express');
var router = express.Router();
const excel = require('../controller/excel')
/* GET home page. */
router.route('/')
  .get(excel.excel)

module.exports = router;
