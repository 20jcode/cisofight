const db = require(process.cwd() + '/rdb');

exports.renderMain = async (req, res, next) => {
    try {

        res.render('main', {
            title: 'ciso',

        });
    } catch (err) {
        console.error(err);
        next(err);
    }
};