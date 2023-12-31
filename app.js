const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const passportConfig = require('./passport');
const passport = require('passport');

dotenv.config();
passportConfig();
const indexRouter = require('./routes/index');

const app = express();
app.set('port',process.env.PORT || 8001);
app.set('view engine', 'html');
nunjucks.configure('views',{
    express:app,
    watch:true,
});

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
const sessionMiddleware = session({
    resave: false,
    saveUninitialized: false,
    secret : process.env.COOKIE_SECRET,
    cookie:{
        httpOnly: true,
        secure: false,
    }
});
app.use(passport.initialize());
app.use(sessionMiddleware);

app.use('/',indexRouter); //기본 연결 주소. 초기 접속 화면

app.use((req,res,next)=>{
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.use((err,req,res,next) =>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV != 'roduction' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

const server = app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 대기 중');
});
