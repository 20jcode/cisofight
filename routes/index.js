
const express = require('express');
//const {isLoggedIn, isNotLoggedIn} = require('../middlewares');

const fightController = require('../controllers/fight'); //전투 부분 컨트롤러

const router = express.Router();


router.get('/fight',fightController); //전투부분

module.exports = router;