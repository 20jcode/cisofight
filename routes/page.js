// '/'에 대해서 바로 호출되는?


const express = require('express');
const {isLoggedIn, isNotLoggedIn} = require('../middlewares');

const router = express.Router();

router.use((req,res,next) => {
    
})