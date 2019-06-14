const express = require('express');
const router = express.Router();

//import controller
const { index, coding } = require('../../../controllers/index_controller');

//index route
router.get('/', index);
//users who love coding
router.get('/coding', coding);

//export router
module.exports = router;