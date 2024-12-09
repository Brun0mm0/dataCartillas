var express = require('express');
var router = express.Router();
const data = require('../controller/data')
/* GET home page. */
router.route('/')
  .get(data.empresas)
router.route('/prestadores')
  .get(data.prestadores)
router.route('/provincias')
  .get(data.provincias)

module.exports = router;
