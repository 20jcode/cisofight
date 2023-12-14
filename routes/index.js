const {renderMain,renderJoin,renderProfile} = require('../controllers/page');
const express = require('express');
const {isLoggedIn, isNotLoggedIn} = require('../middlewares');
const { join,login,logout} = require('../controllers/auth');

const {createFight} = require('../controllers/fight');


const router = express.Router();



router.get('/fight',createFight); //전투부분
router.get('/profile',isLoggedIn,renderProfile);
router.get('/join',isNotLoggedIn,renderJoin);

router.post('/auth/join',isNotLoggedIn, join);
router.post('/login',isNotLoggedIn,login);
router.post('/auth/logout',isLoggedIn,logout);

router.get('/',renderMain);

module.exports = router;