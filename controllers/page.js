const db = require(process.cwd() + '/rdb/pools');

exports.renderMain = async (req, res, next) => {
    try {

        res.render('main', {
            title: 'ciso전투',

        });
    } catch (err) {
        console.error(err);
        next(err);
    }
};

exports.renderProfile = async(req,res,next) => {

}

exports.renderJoin = async (req,res,next) => {
    res.render('join', { title : '회원가입'});
};