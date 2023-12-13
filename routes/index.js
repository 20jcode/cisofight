const {renderMain} = require('../controllers/page');
const express = require('express');
//const {isLoggedIn, isNotLoggedIn} = require('../middlewares');

const {createFight} = require('../controllers/fight'); //전투 부분 컨트롤러

const router = express.Router();



router.get('/fight',createFight); //전투부분
router.get('/',renderMain);

module.exports = router;