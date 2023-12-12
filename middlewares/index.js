
//routes/index.js 에서 사용됨. 로그인 되어있는지 확인
exports.isLoggedIn = (req,res,next) => {
    if (req.isAuthenticated()){
        next();
    } else {
        res.status(403).send('로그인 필요');
    }
};

//routes/page.js에서 사용됨.
exports.isNotLoggedIn = (req,res,next) => {
    if (!req.isAuthenticated()){
        next();
    } else {
        const message = encodeURLComponent('로그인한 상태입니다.');
        res.redirect(`/?error=${message}`);
    }
};