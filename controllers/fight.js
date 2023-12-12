const ciso = require('../models/game/ciso');
//const db = require(process.cwd()+'/rdb');

exports.createFight = async (req, res, next) => {
    //새로운 매칭 네임스페이스를 만든다.

    try {
        //const newFight = await db.execute(); //DB에 새로운 매칭방에 대해 생성

        //db사용 전 테스트용으로 그냥 하드코딩
        //TODO : db수정
        const newFight = {_id : 0};

        const io = req.app.get('io');
        io.of('/fight').emit('newFight', newFight); //해당 방에 대한 정보를 클라이언트들에게 전달

        res.redirect(`/fight/${newFight._id}`); //응답을 해당 네임스페이스로
    } catch (error) {
        console.error(error);
        next(error);
    }
};

